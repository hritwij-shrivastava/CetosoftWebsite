import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageCloudRoutingModule } from './storage-cloud-routing.module';
import { StorageCloudComponent } from './storage-cloud.component';


@NgModule({
  declarations: [
    StorageCloudComponent
  ],
  imports: [
    CommonModule,
    StorageCloudRoutingModule
  ]
})
export class StorageCloudModule { }
