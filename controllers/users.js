var userList = [
    { id: 1, name: 'Joao', password: '5Series', admin : false},
    { id: 2, name: 'Bernardo', password: 'A4', admin : true},
    { id: 3, name: 'Rui', password: 'Megane', admin : false},
    { id: 4, name: 'Ana', password: 'Focus', admin : false},
    { id: 5, name: 'Maria', password: 'Ibiza', admin : false},
    { id: 6, name: 'Diogo', password: 'Golf', admin : false},
    { id: 7, name: 'Gonçalo', password: 'Civic', admin : false},
    { id: 8, name: 'Liliana', password: 'Corolla', admin : false}
]


var getUsers = (req,res,next) => {
    res.json(userList);
}

var getById = (req,res, next) => {
    var id = req.params.id;
    console.log(id);
    var user = userList.filter((user)=> {
        return user.id == id;
    });
    console.log(user);
    res.json(user[0]);
}

var getByName = (req,res, next) => {
    var name = req.params.username;
    console.log(name);
    var user = userList.filter((user)=> {
        return user.name.toLowerCase() == name;
    });
    console.log(user);
    res.json(user[0]);
}

module.exports = {
    getUsers : getUsers,
    getById : getById,
    getByName : getByName
}