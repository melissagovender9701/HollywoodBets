import { Component, OnInit } from '@angular/core';
import { BetslipService} from '../betslip.service';
@Component({
  selector: 'app-left-side-nav',
  templateUrl: './left-side-nav.component.html',
  styleUrls: ['./left-side-nav.component.css']
})
export class LeftSideNavComponent implements OnInit {

  constructor(private betslipService:BetslipService) { }

  item=[];
  count=0;
  betslipMessage=`To place a bet: Choose the sport, tournament and event that you would like to bet on. Then select a market by clicking the odds that you would like to bet on.`;
  message:string;
  
  ngOnInit(): void {
    // this.item = this.betslipService.item;
  }

  ngAfterContentChecked(){
    this.item=this.betslipService.item;
    this.count = this.item.length;
    if(this.item.length >= 1){
      this.message = null;
    }
    else{
      this.message = this.betslipMessage;
    }
  }

  clearBetslip(){
    this.betslipService.clearBetSlip();
  }
  removeFromBetSlip(item:any){
    this.betslipService.removeEvent(item);
  }
}
