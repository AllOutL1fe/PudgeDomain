import { Component, OnInit } from '@angular/core';
import { parse } from 'querystring';



class Item {
  purchase: string;
  done: number;
  price: number;
  effect: string;

  constructor(purchase: string, price: number, effect: string) {

    this.purchase = purchase;
    this.price = price;
    this.effect = effect;
    this.done = 0;
  }
}

class Player {
  nickname: string;
  expirience: number;
  level: number;
  gold: number;

  constructor(nickname: string, expirience: number, level: number, gold: number) {
    this.nickname = nickname;
    this.expirience = 0;
    this.level = 1;
  }
}

@Component({
  selector: 'purchase-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponentShop implements OnInit{
  ngOnInit(): void {
    this.player.gold=parseInt(localStorage.getItem("gold") as any);
    
  }
  clicks: number;
  player: Player = { nickname: "TestNick", expirience: 0, level: 1, gold: 228 };

  items: Item[] =
    [
      { purchase: "Перчатки", done: 1, price: 30, effect: "Увеличивает точность" },
      { purchase: "Кинжал", done: 1, price: 60, effect: "Урон от атак увеличен" },
      { purchase: "Гаррота", done: 1, price: 100, effect: "Жертва получает на 5% больше урона" },
      { purchase: "Из под тишка", done: 1, price: 500, effect: "Шанс критануть" }
    ];
  
  buyItem(name: string): void
  {

    for (let item of this.items) {
      if ((item.purchase == name) && (this.player.gold >= item.price)) {

        this.player.gold -= item.price;
        item.done += 1;
        item.price *= 1.5;


      }
    }



  }

  Clicking(): void {
    this.clicks += 1;
    this.player.gold += (1 + this.items[1].done / 1.3 + this.items[0].done / 3) * (100 + this.items[2].done * 5) / 100*this.items[3].done;
    this.player.gold = Math.round(this.player.gold);
    localStorage.setItem("gold", this.player.gold.toString());
  }
}
