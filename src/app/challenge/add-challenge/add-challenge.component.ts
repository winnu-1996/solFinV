import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-add-challenge',
    templateUrl: './add-challenge.component.html',
    styleUrls: ['./add-challenge.component.css']
})
export class AddChallengeComponent implements OnInit {

    public routeData: any[] = [];
    public arryJson = [
        {
            "id": 2,
            "title": "Login",
            "hierarchy": 1,
            "parent": 1
        },
        {
            "id": 3,
            "title": "signup",
            "hierarchy": 1,
            "parent": 1
        },
        {
            "id": 4,
            "title": "Dashboard",
            "hierarchy": 1,
            "parent": 1
        },
        {
            "id": 5,
            "title": "Header",
            "hierarchy": 2,
            "parent": 2
        },
        {
            "id": 6,
            "title": "Footer",
            "hierarchy": 3,
            "parent": 3
        },
        {
            "id": 7,
            "title": "SideMenu",
            "hierarchy": 4,
            "parent": 4
        },
        {
            "id": 8,
            "title": "Routing",
            "hierarchy": 5,
            "parent": 5
        },
        {
            "id": 9,
            "title": "Dropbox",
            "hierarchy": 6,
            "parent": 6
        }
    ];

    constructor() { }

    ngOnInit() {
        //  this.getParentRouteData();
    }




}
