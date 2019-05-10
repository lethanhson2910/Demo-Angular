import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingComponent } from './data-binding.component';
import { OnewayBindingComponent } from './oneway-binding/oneway-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { FormsModule } from '@angular/forms';
import { BaitapComponent } from './baitap/baitap.component';

@NgModule({
  declarations: [DataBindingComponent, OnewayBindingComponent, TwowayBindingComponent, BaitapComponent],
  exports: [DataBindingComponent, OnewayBindingComponent, TwowayBindingComponent, BaitapComponent],
  imports: [CommonModule, FormsModule]
})
export class DataBindingModule { }
