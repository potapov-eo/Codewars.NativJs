// Task 01
// Дан интерфейс класса транспортное средство. На его основе реализуйте класс vehicle.
// - максимальная скорость по умолчанию ограничена в 150
// - необходимо предусмотреть: нельзя завести рабочий двигатель, как и остановить не рабочий.
// - нельзя остановить стоящее транспортное средство и т.д. Чем больше тем лучше)
// - метод startMoving должен раз в секунду выводить текущую скорость, при это увеличивать ее на произвольное число
// скорость не должна увеличиться больше чем максимальная скорость. Выводить в консоль предупреждение о большой скорости,
// выводить в консоль сообщение о достижении максимальной скорости.
// - метод stopMoving должен раз в секунду выводить текущую скорость, при это уменьшать ее на произвольное число
// (можно на тоже что и метод startMoving), скорость не может быть меньше 0. Выводить сообщение о остановки.
// создайте экземпляр класса и проверьте что все работает

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
