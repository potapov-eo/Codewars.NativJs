/*
interface IVehicle {
    isStartEngine: boolean;
    isMoving: boolean;
    speed: number;
    startEngine: () => void;
    stopEngine: () => void;
    startMoving: (maxSpeed?: number) => void;
    stopMoving: () => void;
}
*/

class Vehicle {
    maxSpeed = 50
    constructor() {
        this.isStartEngine = false
        this.isMoving = false
        this.speed = 0
    }

    startMoving() {
        let timerId = setInterval(() => {
            this.speed += Math.random() * 10
           if (this.speed>=this.maxSpeed) {
               console.log("превышение")
               clearInterval(timerId)
               this.speed=50
           }else  console.log(this.speed)
        }, 1000)
    }
    stopMoving(){
        let stopTimerId = setInterval(() => {
            this.speed -= Math.random() * 10
            if (this.speed<=0) {
                console.log("stop")
                clearInterval(stopTimerId)
                this.speed=0
            }else  console.log(this.speed)
        }, 1000)

    }
    startEngine(){

    }

}

let myVehicle = new Vehicle()
myVehicle.stopMoving()


