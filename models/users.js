'use strict'
var userList = [
    { id: 1, name: 'Joao', password: '5Series', role : "admin"},
    { id: 2, name: 'Bernardo', password: 'A4', role : "user"},
    { id: 3, name: 'Rui', password: 'Megane', role : "user"},
    { id: 4, name: 'Ana', password: 'Focus', role : "user"},
    { id: 5, name: 'Maria', password: 'Ibiza', role : "user"},
    { id: 6, name: 'Diogo', password: 'Golf', role : "user"},
    { id: 7, name: 'Gonçalo', password: 'Civic', role : "user"},
    { id: 8, name: 'Liliana', password: 'Corolla', role : "user"}
]

var getUsers = () => {
    return userList;
}

var getById = (id) => {
    console.log(id);
    var user = userList.filter((user)=> {
        return user.id == id;
    });
    return user[0];
}

var getByName = (name) => {
    console.log(name);
    var user = userList.filter((user)=> {
        return user.name.toLowerCase() == name.toLowerCase();
    });
    return user[0];
}

module.exports = {
    getUsers : getUsers,
    getById : getById,
    getByName : getByName
}