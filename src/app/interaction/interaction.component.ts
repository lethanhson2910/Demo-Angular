import { Component, OnInit, ViewChild } from '@angular/core';
import { DanhSachPhimComponent} from './danh-sach-phim/danh-sach-phim.component';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {
  @ViewChild(DanhSachPhimComponent) dsPhim: DanhSachPhimComponent;
  constructor() {}

  ngOnInit() {}

  themPhim(_maPhim, _tenPhim, _giaPhim, _hinhAnh) {
    let objPhim = {
      maPhim: _maPhim,
      tenPhim: _tenPhim,
      gia: _giaPhim,
      hinhAnh: _hinhAnh
    };
    this.dsPhim.themPhim(objPhim);
  }
}
