import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {
  public DSNV: any = [{
      ten: 'Son 1',
      tuoi: 10
    },
    {
      ten: 'Son 2',
      tuoi: 20
    },
    {
      ten: 'Son 3',
      tuoi: 30
    },
    {
      ten: 'Son 4',
      tuoi: 40
    }
  ];
  constructor() {}

  ngOnInit() {}

}
