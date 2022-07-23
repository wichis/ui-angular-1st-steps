import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncCallsComponent } from './toluca-js/async-calls/async-calls.component';
import { ForkCallsComponent } from './toluca-js/fork-calls/fork-calls.component';
import { PipeCallsComponent } from './toluca-js/pipe-calls/pipe-calls.component';

const routes: Routes = [
  {
    path: 'async',
    component: AsyncCallsComponent
  },
  {
    path: 'fork',
    component: ForkCallsComponent
  },
  {
    path: 'pipe',
    component: PipeCallsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
