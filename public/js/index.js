// const queryString = require('query-string')
// import queryString from 'query-string'

//const $sampleButton = document.querySelector('#samplegoogle')

// const stringifiedParams = queryString.stringify({
//     client_id: process.env.GOOGLE_OAUTH_CLIENT_ID,
//     redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT_URI,
//     scope: [
//       'https://www.googleapis.com/auth/userinfo.email',
//       'https://www.googleapis.com/auth/userinfo.profile',
//     ].join(' '),
//     response_type: 'code',
//     access_type: 'offline',
//     prompt: 'consent',
//   });

const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=828943984544-el49aitajaus8bn56nq8lr56pfb8gpnv.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fgoogle&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&access_type=offline&prompt=consent`;

/*$sampleButton.addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.href=googleLoginUrl
    // fetch("/auth/google", {
    // method: "POST",
    // headers: {
    //     "Content-type": "application/json; charset=UTF-8"
    // }
    // })
    // .then(response => response.json())
    // .catch(err=> console.log(err))
})*/

const isAuthorized=true;
const rooms = ['dcbhew','dchbwhe','ehvbfh']
if(isAuthorized===true){
    const element=document.getElementById("nav-right");
    element.removeChild(element.firstElementChild);
    element.removeChild(element.lastElementChild);
    var elem = document.createElement("img");
    elem.src='./img/user.png';
    document.getElementById("nav-right").appendChild(elem);
    document.getElementById("nav-right").style.paddingTop="5px";
    document.getElementById("nav-right").lastElementChild.style.height="40px";
    // function favTutorial() {  
    //     var mylist = document.getElementById("myList");  
    //     document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;  
    // }  
    //document.getElementById("nav-right")..style.width="40px";
    const para =document.createElement("p");
    para.innerHTML="Rooms you have already joined:";
    document.getElementById("room-list").appendChild(para);
    let list = document.getElementById("myList");
    rooms.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
      
    })
}

// show profile dashboard icon and rooms list if true

