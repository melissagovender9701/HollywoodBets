import { Injectable } from '@angular/core';
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
    this.updateBetId();
    console.log(this.item);
  }

  updateBetId(){
    for(let index=0; index < this.item.length; index++){
      const element = this.item[index];
      element.id = index + 1;
    }
  }
  clearBetSlip(){
    this.finalTotal = 0;
    this.item.splice(0,this.item.length);
  }
  removeEvent(event:any){
    const index = this.item.indexOf(event);
    if(index!==-1){
      this.item.splice(index,1);
    }
    this.updateBetId();
  }
}
