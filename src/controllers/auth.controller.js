const {OAuth2Client} = require('google-auth-library');
const url = require('url')

const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID
const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET
const redirectUri = process.env.GOOGLE_OAUTH_REDIRECT_URI

const client = new OAuth2Client(clientId,clientSecret,redirectUri);

async function googleAuth(req,res){
    console.log('inside')
    // const abc = req.params
    // console.log(abc)
    const qs = new url.URL(req.url, 'http://localhost:3000').searchParams
    console.log(qs)
    const code = qs.get('code')
    try{
        let idtoken = await client.getToken(code);
        const ticket = await client.verifyIdToken({
          idToken: idtoken.tokens.id_token,
          audience: clientId,
        });
        const { name, email } = ticket.getPayload()
        console.log(name,email)
        res.sendStatus(200)
    }
    catch(e){
        console.log(e)
        res.status(500).send(e)
    }
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
    getGoogleAuthUrl
}