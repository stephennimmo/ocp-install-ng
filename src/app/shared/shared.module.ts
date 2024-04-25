import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
    NavbarComponent
  ]
})
export class SharedModule { }
