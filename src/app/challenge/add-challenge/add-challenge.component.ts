import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-add-challenge',
    templateUrl: './add-challenge.component.html',
    styleUrls: ['./add-challenge.component.css']
})
export class AddChallengeComponent implements OnInit {

    public routeData: any[] = [];
    
    constructor() { }

    ngOnInit() {
        //  this.getParentRouteData();
    }

}
