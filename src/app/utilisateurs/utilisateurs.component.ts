import { Component, OnInit } from '@angular/core';
import { UtilisateursService } from '../services/utilisateurs.service';

@Component({
    selector: 'app-utilisateurs',
    templateUrl: './utilisateurs.component.html',
    styleUrls: ['../liste-series/liste-series.component.css']
})
export class UtilisateursComponent implements OnInit {
    titre:string;

    constructor(private utilisateursService: UtilisateursService) {
        this.titre = "Liste des utilisateurs";
    }
    ngOnInit() {
    }

}
