// used in 50
//create object
let car = {
    name: "maruti",
    topspeed: 89,
    runfuction() {
        console.log("car is running");
    }
}
// create a constr
function gencar(gname, gspeed) {
    this.name = gname;
    this.topspeed = gspeed;
    this.run = function () {
        console.log(`${this.name} is running`);
    }
    this.analyze = function () {
        console.log(`this car is slower by ${200 - this.topspeed} km/h than BMW`)
    }
}
car1 = new gencar('Nissan', 120)
car2 = new gencar('BMW', 200)

console.log(car2);
