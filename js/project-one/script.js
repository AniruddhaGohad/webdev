const submitBtn = document.getElementById('submit');
const email = document.getElementById('email');
const password = document.getElementById('password');
const dob = document.getElementById('dob');

const userDataArray = localStorage.getItem('userDataArray');
let userData = [];

if(userDataArray) {
    userData = JSON.parse(userDataArray);
}


const submitFormHandler = (event) => {
    event.preventDefault();
    const user = {
        email: email.value,
        password: password.value,
        dob: dob.value
    }

    userData.push(user);
    localStorage.setItem('userDataArray', JSON.stringify(userData))
}

submitBtn.addEventListener('click', submitFormHandler)