import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponentComponent } from './table-component/table-component.component';

const routes: Routes = [
  {path:'',component:TableComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
