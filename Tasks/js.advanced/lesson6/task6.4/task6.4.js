// Task 04
// Создать класс Warrior который реализует интерфейс IWarrior.
// метод attack возвращает значение damage
// метод attackWithBonus оставить пустым
// у класса должен быть статический метод battle который принимает 2 аргумента (объекты с интерфейсом IWarrior)
// метод battle должен реализовывать поочередные ходы до тех пор пока не останется в живых только один.
// выбор кто ходит первым должен быть случайным.
// на каждом ходе должна выводиться информация о нанесенном уроне и остатке здоровья у противника
// в конце написать кто победил

/*interface IWarrior {
   health: number;
   damage: number;
   defence: number;
   attack: () => number;
   attackWithBonus: Function
}*/

class Warrior {

   constructor(health,damage,defence) {
      this.health = health
      this.damage = damage
      this.defence = defence
   }
   attack(){
      return this.damage
   }

   attackWithBonus(){

   }
   static battle(WarriorA,WarriorB){

   }

}

let myVehicle = new Vehicle()
myVehicle.stopMoving()
