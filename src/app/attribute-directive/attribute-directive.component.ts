import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.scss']
})
export class AttributeDirectiveComponent implements OnInit {
  mang:any = ["Nguyen Van A","nguyen Vann B"];
  constructor() { }

  ngOnInit() {
  }

}
