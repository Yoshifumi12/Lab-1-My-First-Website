function login() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    if (!username) {
        alert('Please input username')
    } else if (username.length < 3) {
        alert('Username must be at least 3 characters')
    } else if (!password) {
        alert('Please input password')
    } else if (password.length < 3) {
        alert('Password must be at least 3 characters')
    }
    else {
        location.replace('home.html')
    }

}

function addPerson() {
    document.getElementById('table').setAttribute("class", "d-none")
    document.getElementById('form').setAttribute("class", "mx-auto")
    document.getElementById('button').setAttribute("class", "d-none")

}

function cancel() {
    document.getElementById('table').setAttribute("class", "")
    document.getElementById('form').setAttribute("class", "d-none")
    document.getElementById('button').setAttribute("class", "")

}

function save() {
    let firstName = document.getElementById('firstName').value
    let lasttName = document.getElementById('lastName').value

    let tr = document.createElement('tr')
    let th = document.createElement('th')

    th.setAttribute("scope", "row")
    th.innerHTML = firstName + ' ' + lasttName

    tr.appendChild(th)
    document.getElementById('tbody').appendChild(tr)

    document.getElementById('table').setAttribute("class", "")
    document.getElementById('form').setAttribute("class", "d-none")
    document.getElementById('button').setAttribute("class", "")

    document.getElementById('firstName').value = ''
     document.getElementById('lastName').value = ''
}