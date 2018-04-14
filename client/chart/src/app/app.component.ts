import { Component } from '@angular/core';
import { ChartService } from './services/chart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
private stocks : any;
  constructor(private chat : ChartService){

this.chat.getStockRecord().subscribe(
  (res)=>{
this.stocks = res;
  }
)

  }
}
