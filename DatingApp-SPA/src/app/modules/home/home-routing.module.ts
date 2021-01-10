import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValueComponent } from './components/value/value.component';

const routes: Routes = [
  { path: '', component: ValueComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
