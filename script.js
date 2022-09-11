let form = document.forms.login
let inps = form.querySelectorAll('input')
let b = document.querySelector('b')
let a = document.querySelector('a')
let c = document.querySelector('button')

let pattern = {
    name: /^[a-z ,.'-]+$/i,
    surname:/^[a-z ,.'-]+$/i,
    'about-me':/^[a-z ,.'-]+$/i,
    mom:/^[a-z ,.'-]+$/i,
    dad:/^[a-z ,.'-]+$/i,
    js:/^[a-z ,.'-]+$/i,
    html:/^[a-z ,.'-]+$/i,
    css:/^[a-z ,.'-]+$/i,
    car:/^[a-z ,.'-]+$/i,
    age: /^\S[0-9]{0,3}$/,
    surname: /^[a-z ,.'-]+$/i,
    email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    phone:  /^9989[012345789][0-9]{7}$/,
    
}

function validate(field, regex) {
    if(regex.test(field.value)) {
        field.classList.add('valid')
        field.classList.remove('invalid')
    } else {
        field.classList.add('invalid')
        field.classList.remove('valid')
    }
}

inps.forEach(inp => {
    inp.onkeyup = () => {
        validate(inp, pattern[inp.name])
    }
});

form.onsubmit = e => {
    e.preventDefault()
    let errCount = 0
    let succsessCount = 12
    inps.forEach(inp => {
        inp.style.border = "2px solid #4200FF"
        if(inp.value.length === 0) {
            errCount++
            inp.style.border = "2px solid red"
            c.style.border = "2px solid red"
            c.style.backgroundColor  = "red"
        }


        
    })

    b.innerHTML = errCount
    a.innerHTML = succsessCount - errCount

    if(errCount === 0) {
        submit(form)
    } 

}

function submit(elem) {
    let user = {
        id: Math.random()
    }

    let fm = new FormData(elem)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}


