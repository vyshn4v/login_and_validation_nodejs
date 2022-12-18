const loginForm = document.getElementById('login-form');

let timeOut;

function ErrorNotification(error) {
    const message = `<div class="alert d-flex justify-content-between alert-danger" role="alert">${error}
     <div class='text-dark' onclick="closeErrorNotification()" style="cursor:pointer">X</div>
</div>`
    loginForm.querySelector(".user-not-found-message").innerHTML = message;
    clearTimeout(timeOut)
    timeOut = setTimeout(() => {
        closeErrorNotification()
    }, 4000);
}

function closeErrorNotification() {
    loginForm.querySelector(".user-not-found-message").innerHTML = '';
    clearTimeout(timeOut)
}

function formSubmit(event) {
    // event.preventDefault();
    const name = document.getElementById('name').value
    const password = document.getElementById('password').value
    let status = true;

    if (name === '' & password === '') {
        new ErrorNotification("Enter the input")
        return false
    }

    if (name.length < 10 || name.length > 15) {
        new ErrorNotification("Enter the user name between 10-15")
        return false
    }
    if (password.length == 0) {
        new ErrorNotification("Enter the password")
        return false
    }
    if (password.length < 5 || password.length > 15) {
        new ErrorNotification("Enter the password between 10-15")
        return false
    }
    return true
    // try {
    //     fetch(`http://localhost:3000/login`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             name,
    //             password
    //         })
    //     }).then((response) =>
    //         response.json()
    //     ).then((data) => {
    //         console.log(data)
    //         // window.location.href = "/home"
    //     }).catch((err) => {
    //         ErrorNotification("User Not Found")
    //     })
    // } catch (err) {
    //     alert("somehting went wrong")
    // }

}