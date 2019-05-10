import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-binding',
  templateUrl: './oneway-binding.component.html',
  styleUrls: ['./oneway-binding.component.scss']
})
export class OnewayBindingComponent implements OnInit {
  name: string = "Cybersoft";
  image: string = "https://picsum.photos/200/300";

  constructor() { }

  ngOnInit() {
  }

  eventBinding(thamso){
    alert("Hello " + thamso);
  }

}
