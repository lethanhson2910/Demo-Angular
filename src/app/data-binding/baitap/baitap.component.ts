import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap',
  templateUrl: './baitap.component.html',
  styleUrls: ['./baitap.component.scss']
})
export class BaitapComponent implements OnInit {
  email: string = "";
  fullName: string = "";
  constructor() { }

  ngOnInit() {
  }

  changeFullName(thamso){
    this.fullName =thamso;
  }



}
