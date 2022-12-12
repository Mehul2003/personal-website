import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";



@NgModule({
  declarations: [],
  exports: [
    MatButtonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule
  ],
})
export class MaterialModule { }
