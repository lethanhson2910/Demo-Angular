import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.scss']
})
export class NgstyleComponent implements OnInit {
  bgcolor: string = "blue";
  name: string= "Abb";
  constructor() { }

  ngOnInit() {
  }

}
