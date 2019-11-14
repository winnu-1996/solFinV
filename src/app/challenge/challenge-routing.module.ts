import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddChallengeComponent } from './add-challenge/add-challenge.component';
import { ChallengesListComponent } from './challenges-list/challenges-list.component';


const routes: Routes = [
  {path:'',component:ChallengesListComponent},
  { path: 'add-challenge', component: AddChallengeComponent },
  { path: 'challenges-list', component: ChallengesListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengeRoutingModule { }
