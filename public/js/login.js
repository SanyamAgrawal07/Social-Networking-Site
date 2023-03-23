const $googleLogin = document.querySelector('#googlelogin')

$googleLogin.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('clicked')
    const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=828943984544-el49aitajaus8bn56nq8lr56pfb8gpnv.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fgoogle&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&access_type=offline&prompt=consent`;
    window.location.href=googleLoginUrl
})