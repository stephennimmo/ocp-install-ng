import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IndexComponent } from './index/index.component';
import { ClusterComponent } from './cluster/cluster.component';


@NgModule({
  declarations: [
    IndexComponent,
    ClusterComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }
