import { Component, OnInit } from '@angular/core';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';
import { logging } from 'protractor';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-baitap-ngif',
  templateUrl: './baitap-ngif.component.html',
  styleUrls: ['./baitap-ngif.component.scss']
})
export class BaitapNgifComponent implements OnInit {
  name: string = "";
  isLogin: boolean = false;

  constructor() { }

  ngOnInit() {
    //Hàm main
    let user = localStorage.getItem("login");
    if(user !== null){
      this.name = user;
      this.isLogin = true;
    }
  }

  logIn(us,pw){
    if(us ==="cybersoft" && pw ==="cybersoft"){
      this.isLogin = true;
      this.name = us;
      localStorage.setItem("logIn", JSON.stringify(us));
      alert("Login Success");
    }
  }  
}
