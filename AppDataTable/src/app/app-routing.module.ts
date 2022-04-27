import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatabledemoComponent } from './compments/datatabledemo/datatabledemo.component';

const routes: Routes = [{
  path: 'datatable',
  component: DatatabledemoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
