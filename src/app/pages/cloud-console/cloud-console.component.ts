import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../service/commonService';

@Component({
  selector: 'app-cloud-console',
  templateUrl: './cloud-console.component.html',
  styleUrls: ['./cloud-console.component.css']
})
export class CloudConsoleComponent implements OnInit {
  activeIndex = 0;
  constructor(private globalService:GlobalService) { }

  ngOnInit(): void {
    this.globalService.getMessage().subscribe(data=> {
      console.log(data);
    })
  }

  showStatus(index) {
    this.activeIndex = index;
    
  }

}
