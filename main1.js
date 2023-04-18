const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.backgroundColor = '#ccc';
})

myForm.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('body').classList.add('bg-dark');
})
myForm.addEventListener('submit', onSubmit);



function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === '')
    {
        msg.classList.add('error');
       msg.innerHTML = 'Please enter mandatory fields';
       setTimeout(() => msg.remove(), 3000);
    }
    else
    {
    console.log(nameInput.value, emailInput.value);
    }
}


