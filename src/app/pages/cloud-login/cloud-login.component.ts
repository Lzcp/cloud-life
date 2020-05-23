import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloud-login',
  templateUrl: './cloud-login.component.html',
  styleUrls: ['./cloud-login.component.scss']
})
export class CloudLoginComponent implements OnInit {
  cloudName: string;
  passwordStart: string;
  passwordEnd: string;
  constructor() { }

  ngOnInit(): void {
  }

}
