// TODO: write your code here
import sum from './basic';

class Character {
    constructor(name, type, health = 100, level = 1) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = {
        Bowman: 25,
        Swordsman: 40,
        Magician: 10,
        Undead: 25,
        Zombie: 40,
        Daemon: 10
       }
    this.defence = {
        Bowman: 25,
        Swordsman: 10,
        Magician: 40,
        Undead: 25,
        Zombie: 10,
        Daemon: 40
       }
    }


}

const gamer = new Character('vic', 'Bowman');
          try {
        if (gamer.name.length >= 2 && gamer.name.length <= 10) {
            console.log(gamer.name);
        } 
          }
    catch(e) {
        console.log("error");
     
    }  