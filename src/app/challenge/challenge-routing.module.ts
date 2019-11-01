import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddChallengeComponent } from './add-challenge/add-challenge.component';


const routes: Routes = [
  { path: 'add-challenge', component: AddChallengeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengeRoutingModule { }
