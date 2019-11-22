import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.scss']
})
export class ChallengesListComponent implements OnInit {

  public challengesList: any[] = [
    {
      'challengeName': '',
      'challengeDesc': '',
      'solution': ''
    }, {
      'challengeName': '',
      'challengeDesc': '',
      'solution': ''
    }, {
      'challengeName': '',
      'challengeDesc': '',
      'solution': ''
    }, {
      'challengeName': '',
      'challengeDesc': '',
      'solution': ''
    }, {
      'challengeName': '',
      'challengeDesc': '',
      'solution': ''
    }, {
      'challengeName': '',
      'challengeDesc': '',
      'solution': ''
    }, {
      'challengeName': '',
      'challengeDesc': '',
      'solution': ''
    }, {
      'challengeName': '',
      'challengeDesc': '',
      'solution': ''
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToAddNewChallengeWithSolution() {
    this.router.navigate(['add-challenge'])
  }

}
