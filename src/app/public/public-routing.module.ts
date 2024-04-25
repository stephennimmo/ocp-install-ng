import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ClusterComponent } from './cluster/cluster.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'cluster', component: ClusterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
