import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe-bus',
  templateUrl: './ghe-bus.component.html',
  styleUrls: ['./ghe-bus.component.scss']
})
export class GheBusComponent implements OnInit {
  @Input() soghe;
  @Output() eventGhe = new EventEmitter();
  trangThaiChon = false;
  constructor() { }

  ngOnInit() {
  } 

  chonGhe(){
    this.trangThaiChon = !this.trangThaiChon;
    let objXe = {
      trangThai: this.trangThaiChon,
      ghe: this.soghe
    }
    this.eventGhe.emit(objXe);
  }
}
