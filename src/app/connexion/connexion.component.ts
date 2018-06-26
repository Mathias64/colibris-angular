import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.component.html',
    styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
    user:Object = {
        id: "",
        mdp: ""
    }

    constructor() { }

    ngOnInit() {
    }

    testID() {
        console.log(this.user);
    }
    soumission(f) {
        console.log(f.value);
    }
}
