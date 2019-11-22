import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengeRoutingModule } from './challenge-routing.module';
import { AddChallengeComponent } from './add-challenge/add-challenge.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatCardModule
} from '@angular/material';
import { ChallengesListComponent } from './challenges-list/challenges-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AddChallengeComponent, ChallengesListComponent],
  imports: [
    CommonModule,
    ChallengeRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatRippleModule,
    MatCardModule
  ]
})
export class ChallengeModule { }
