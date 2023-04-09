const {OAuth2Client} = require('google-auth-library');
const url = require('url')
const ogm = require('../neo4j/schema.js')
const User=ogm.model('User')
const {addUser} = require('./user.controller.js')
const {isIiitaUser,generateAuthToken} = require('../utils/users.js')

const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID
const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET
const redirectUri = process.env.GOOGLE_OAUTH_REDIRECT_URI

const client = new OAuth2Client(clientId,clientSecret,redirectUri);

async function googleAuth(req,res){
    console.log('inside')
    const qs = new url.URL(req.url, 'http://localhost:3000').searchParams
    console.log(qs)
    const code = qs.get('code')
    try{
        let idtoken = await client.getToken(code);
        const ticket = await client.verifyIdToken({
          idToken: idtoken.tokens.id_token,
          audience: clientId,
        });
        const {name,email} = ticket.getPayload()
        const alreadyUser = await User.find({where:{emailId:email}})
        if(!alreadyUser.length){
          console.log('creating new user')
          const createdUser = await addUser({
            name,
            username:name,
            emailId:email,
            password: null,
            iiita:isIiitaUser(email)
          })
          generateAuthToken(createdUser)
        }
        else{
          console.log(alreadyUser)
          console.log('user already present')
          generateAuthToken(alreadyUser[0])
        }
        // console.log(obj)
        // res.redirect(publicDirectoryPath)
        res.redirect('../../index.html')
        // res.sendStatus(200)
    }
    catch(e){
        console.log(e)
        res.status(500).send(e)
    }
}

async function handleLogin(req,res){
   const {emailId,password} = req.body
   if(!(emailId && password)) return res.status(400).send('Email or password missing')
   let alreadyUser = await User.find({where:{emailId}})
   alreadyUser = alreadyUser[0]
   if(password!==alreadyUser.password) return res.status(400).send('Incorrect password')
   await generateAuthToken(alreadyUser)
   res.sendStatus(200) 
}

async function handleSignup(req,res){
  const {emailId,password,name,username} = req.body
  if(!(emailId && password && name && username)) return res.status(400).send('Email or password missing')
  const createdUser = await addUser({
    name,
    username,
    emailId,
    password,
    iiita:isIiitaUser(emailId)
  })
  await generateAuthToken(createdUser)
  res.sendStatus(201) 
}

function getGoogleAuthUrl(req, res) {
    const url = client.generateAuthUrl({
      access_type: 'online',
      scope: ['profile', 'email'],
    });
    return res.status(200).send({url})
  }

module.exports={
    googleAuth,
    getGoogleAuthUrl,
    handleLogin,
    handleSignup
}