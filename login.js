function login() {
    let username = document.querySelector("#username").value
    let password = document.querySelector("#password").value
    if (!username) {
        alert('Please input username')
    } else if (username.length < 3) {
        alert('Username must be at least 3 characters')
    } if (!password) {
        alert('Please input password')
    } else if (password.length < 3) {
        alert('Password must be at least 3 characters')
    }
    if(username === 'admin' && password === 'root'){
        location.replace('home.html')
    }

}
