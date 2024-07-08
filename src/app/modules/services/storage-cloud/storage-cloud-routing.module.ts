import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorageCloudComponent } from './storage-cloud.component';

const routes: Routes = [{ path: '', component: StorageCloudComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorageCloudRoutingModule { }
