class Vehicle{
    constructor(Year, speed, manufacturer, id){
        this.Year = Year,
        this.speed = speed,
        this.manufacturer = manufacturer,
        this.id =id;
    }
    printmy(){
        
            return `${this.Year}, | ${this.speed}, | ${this.manufacturer} ${this.id}`
        
    }
}
class Truck extends Vehicle{
    constructor(Year, speed, manufacturer, id, loadingWeight){
        super(Year, speed, manufacturer, id);
        this.loadingWeight = loadingWeight;
    }
}

class TruckCold extends Truck{
    constructor(year, speed, manufacturer, id, loadingWeight, naxTemp){
        super(year, speed, manufacturer, id, loadingWeight);
        this.naxTemp = naxTemp;
    }
}

class Car extends Vehicle{
    constructor(year, speed, manufacturer, id, door){
        super(year, speed, manufacturer, id);
        this.door = door;
    }
    show(){
        return super.printmy
    }
}
class TwoWheeler extends Vehicle{
    constructor(year, speed, manufacturer, id){
        super(year, speed, manufacturer, id);
    }
}

class User{
    constructor(name, id){
        this.name = name,
        this.id = id;
    }
}




let Vehicles = [
    new Truck("2001", 150, "volvo", "1", 1500),
    new Truck("2002", 140, "toyota", "2", 2000),
    new Truck("2003", 130, "chevrolet", "3", 2500),
    new Truck("2004", 120, "mercedes", "4", 3000),
    new TruckCold("2005", 160, "volvo", "5", 1200, -20),
    new TruckCold("2005", 150, "toyota", "6", 3000, -30),
    new TruckCold("2005", 140, "chevrolet", "7", 1800, -10),
    new TruckCold("2005", 130, "mercedes", "8", 2400, -50),
    new Car("2020", 200, "volvo", "9", 4),
    new Car("2021", 180, "toyota", "10", 2),
    new Car("2022", 160, "chevrolet", "11", 6),
    new Car("2023", 150, "mercedes", "12", 4),
    new TwoWheeler("2023", 40, "gmy", "13"),
    new TwoWheeler("2022", 30, "yama", "14"),
    new TwoWheeler("2021", 50, "gyg", "15"),
    new TwoWheeler("2020", 60, "abc", "16")
];

let users = [
    new User("zvi", 212259329),
    new User("issac", 38463907)
];

let rented = [
    {userId: 212259329, carId: "1"},
    {userId: 4985, carId: "7477"}
]

function rentCar(){
    let userId = 212259329;
    userId= Check_if_user_exists_in_the_system(userId)
    if(userId){
        let carid = getUserFromRental(userId);
        if(carid){
            for(car of Vehicles){
                if (car.id == carid){
                    return alert(
                        `
                        You have already rented this vehicle : ${getObjectBiId().show}
                        `
                    )
                }
            }
        }
    }
}

function Check_if_user_exists_in_the_system(userid){
    for(i of users){
        if(i.id == userid){
            return userid;
        }
    }
}

function getUserFromRental(userid){
for(rent of rented){
    if(rent.userId == userid){
        return rent.carId;
        
    }
  }
}
function getObjectBiId(){
    let object = getObjectBiId();
    for(i of Vehicles){
        if(i.id == object){
            return i;
        }
    }
}
rentCar()