import { Injectable } from '@angular/core';
import { LeftSideNavComponent } from './left-side-nav/left-side-nav.component';
import { Bet } from './bet';

@Injectable({
  providedIn: 'root'
})
export class BetslipService {

  item=[];
  finalTotal=0;
  _idCounter=1;
  _value: Bet;

  constructor() { }

  addToBetSlip(bet:any, punterchoice:string, odds:number){
    console.log(bet);
    this._value ={
      id:this._idCounter,
      typeOfEvent:'Soccer',
      event:bet,
      punterBetSelection:punterchoice,
      selectionOdds:odds,
      cost:7
    };
    this.item.push(this._value);
    this._idCounter++;
    console.log(this.item);
  }

  clearBetSlip(){
    this.finalTotal = 0;
    this.item.splice(0,this.item.length);
  }
  removeEvent(event:any){
    this.item.splice(this.item.lastIndexOf(event),1);
  }
}
