import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectiveComponent } from './structural-directive.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';

@NgModule({
  declarations: [StructuralDirectiveComponent, NgifComponent, NgforComponent, NgswitchComponent],
  exports: [StructuralDirectiveComponent, NgifComponent, NgforComponent, NgswitchComponent],
  imports: [
    CommonModule
  ]
})
export class StructuralDirectiveModule { }
