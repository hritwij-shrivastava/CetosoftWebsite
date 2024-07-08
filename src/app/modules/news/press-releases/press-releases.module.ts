import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PressReleasesRoutingModule } from './press-releases-routing.module';
import { PressReleasesComponent } from './press-releases.component';


@NgModule({
  declarations: [
    PressReleasesComponent
  ],
  imports: [
    CommonModule,
    PressReleasesRoutingModule
  ]
})
export class PressReleasesModule { }
