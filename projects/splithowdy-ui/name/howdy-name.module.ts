import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowdyNameComponent } from './howdy-name.component';



@NgModule({
  declarations: [HowdyNameComponent],
  exports: [HowdyNameComponent],
  imports: [
    CommonModule
  ]
})
export class HowdyNameModule { }
