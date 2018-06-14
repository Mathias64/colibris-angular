import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-connexion',
    templateUrl: './connexion.component.html',
    styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
    user:object = {
        id: "",
        mdp: ""
    }

    constructor(private route:Router) { }

    ngOnInit() {
    }

    testID() {
        console.log(this.user);
    }

    soumission(f) {
        if (f.value.mailConnexion && f.value.mdpConnexion) {
            console.log(f.value);
            switch (f.value.mailConnexion) {
                case "documentaliste@gmail.com":
                    this.route.navigateByUrl("/series");
                    break;
                case "admin@gmail.com":
                    this.route.navigateByUrl("/utilisateurs");
                    break;
            }
            
        }
    }

}
