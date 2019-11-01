import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengeRoutingModule } from './challenge-routing.module';
import { AddChallengeComponent } from './add-challenge/add-challenge.component';


@NgModule({
  declarations: [AddChallengeComponent],
  imports: [
    CommonModule,
    ChallengeRoutingModule
  ]
})
export class ChallengeModule { }
