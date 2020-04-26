import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowdyTimeComponent } from './howdy-time.component';



@NgModule({
  declarations: [HowdyTimeComponent],
  exports: [HowdyTimeComponent],
  imports: [
    CommonModule
  ]
})
export class HowdyTimeModule { }
