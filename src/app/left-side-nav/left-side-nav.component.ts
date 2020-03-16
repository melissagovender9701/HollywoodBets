import { Component, OnInit } from '@angular/core';
import { BetslipService} from '../betslip.service';
@Component({
  selector: 'app-left-side-nav',
  templateUrl: './left-side-nav.component.html',
  styleUrls: ['./left-side-nav.component.css']
})
export class LeftSideNavComponent implements OnInit {

  item=[];
  count=0;
  ngOnInit(): void {
    this.item = this.betslipService.item;
  }
  ngAfterContentChecked(){
    this.item=this.betslipService.item;
    this.count = this.item.length;
  }
  constructor(private betslipService:BetslipService) { }
  removeFromBetSlip(event:any){
    this.betslipService.removeEvent(event);
  }
}
