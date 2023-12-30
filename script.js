
let firstName ='Midu'

const lastName = 2

const list = []
list.push(123)
console.log(list)

console.log(lastName)
firstName = 'Ivan'
firstName.toUpperCase()
//lastName = 10
console.log(firstName)
//console.log(lastName)

const hello = "como estas"
const helloToUpperCase = hello.toUpperCase()
console.log(hello)
console.log(helloToUpperCase)


const Persona = {
    name: 'Ivan', 
    age: 20,
    isDeveloper: true,
    mails: ['ivan.mayta@gmail.com', 'rodrigo.mayta@edu.pe']
}


console.log(Persona.mails[0])

//to start with react 

const field = 'mails'
console.log(Persona[field])


const sumar = (p1, p2) => {
    solve = p1+p2
    return solve
}

console.log(sumar(2,3))


function restar(a, b){
    return a-b
}