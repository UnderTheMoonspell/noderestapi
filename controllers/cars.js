var carList = [
    { id: 1, brand: 'BMW', model: '5 Series'},
    { id: 2, brand: 'Audi', model: 'A4'},
    { id: 3, brand: 'Renault', model: 'Megane'},
    { id: 4, brand: 'Ford', model: 'Focus'},
    { id: 5, brand: 'SEAT', model: 'Ibiza'},
    { id: 6, brand: 'VW', model: 'Golf'},
    { id: 7, brand: 'Honda', model: 'Civic'},
    { id: 8, brand: 'Toyota', model: 'Corolla'},
]


var getCars = (req,res,next) =>{
    res.json(carList);
}

var getById = (req,res, next) => {
    var id = req.params.id;
    console.log(id);
    var car = carList.filter((car) =>{
        return car.id == id;
    });
    console.log(car);
    res.json(car[0]);
    return car[0];
}

module.exports = {
    getCars : getCars,
    getById : getById
}