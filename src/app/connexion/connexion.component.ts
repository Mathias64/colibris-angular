import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

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

    constructor(private route:Router, private authService:AuthService) { }

    ngOnInit() {
    }

    testID() {
        console.log(this.user);
    }

    soumission(f) {
        if (f.value.mailConnexion && f.value.mdpConnexion) {
            console.log(f.value);
            switch (f.value.mailConnexion) {
                case "prof@gmail.com":
                    this.authService.setProfAuth(true);
                    this.route.navigateByUrl("/series");
                    break;
                case "documentaliste@gmail.com":
                    this.authService.setDocuAuth(true);
                    this.route.navigateByUrl("/requetes");
                    break;
                case "admin@gmail.com":
                    this.authService.setAdminAuth(true);
                    this.route.navigateByUrl("/utilisateurs");
                    break;
                default:
                    this.route.navigateByUrl("/connexion");
                    break;
            }
        }
    }


}
