let people = [];

let submit = document.querySelector('#submit');
let display = document.querySelector('#display');

submit.addEventListener('click', (e)=> {
    e.preventDefault();
    let firstname = document.querySelector('#firstname').value;
    let surname = document.querySelector('#surname').value;
    let email = document.querySelector('#email').value;

    // Push your object into an array
    people.push(
        {
            firstname,
            surname,
            email
        }
    );
    console.log(people);

    localStorage.setItem('data', JSON.stringify(people));
})

display.addEventListener('click', (e)=> {
    e.preventDefault();
    console.log(
        JSON.parse(localStorage.getItem('data'))
    );
})
