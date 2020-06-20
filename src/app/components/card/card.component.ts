import { Component, OnInit,Input } from '@angular/core';
import { GlobalService } from '../../service/commonService';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  itemActive = false;
  @Input() index;
  @Input() set activeIndex(value) {
    
    if (value === this.index) {
      this.itemActive = true;
    } else {
      this.itemActive = false;
    }
  }
  constructor(private globalService:GlobalService) { }

  ngOnInit(): void {
  }

  send() {
    this.globalService.sendMessage(this.index);
  }

}
