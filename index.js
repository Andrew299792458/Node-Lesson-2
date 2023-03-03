const http = require('http');

const hostname = 'Localhost';
const port = 3000;



const USERS = [
    {
        id: 1,
        name: "Anna",
        surname: "Vardanyan",
        email: "anvard@gmail.com",
        password: "123123123",
        age: 25
    },
    {
        id: 2,
        name: "Gayane",
        surname: "Asatryan",
        email: "gayas@gmail.com",
        password: "123123123",
        age: 26
    },
    {
        id: 3,
        name: "Alla",
        surname: "Zaqyan",
        email: "alzaq@gmail.com",
        password: "123123123",
        age: 27
    },
    {
        id: 4,
        name: "Abgar",
        surname: "Zaqaryan",
        email: "abzaq@gmail.com",
        password: "123123123",
        age: 25
    },
    {
        id: 5,
        name: "Mane",
        surname: "Qeyan",
        email: "manqe@gmail.com",
        password: "123123123",
        age: 28
    }
]

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});


//signIn functional
// const getUser = (email, password) => {
//     const user = USERS.find((user) => email === user.email && password === user.password);
//     return user;
// }

// const email = "manqe@gmail.com";
// const password = "123123123";

// const user = getUser(email, password);
// if (!user) {
//     const data = {
//         success: false,
//         data: null,

//     }
//     console.log("data >>>", data)
// } else {
//     const data = {
//         success: true,
//         data: user,

//     }
//     console.log("data >>>", data)
// }

const userId = 2;

const getUserById = (userId) => {
    const user = USERS.find((user) => userId === user.id);
    return user;
}


const validateUser = (user) => {
    if (!user) {
        const data = {
            success: false,
            data: null,

        }
        return data
    }
    const data = {
        success: true,
        data: user,

    }

    return data
}
const validatedUserData = validateUser(getUserById(userId))
console.log("validatedUserData", validatedUserData)

server.listen(port, hostname, () => {

    console.log(`Server running at http://${hostname}:${port}/`);
});