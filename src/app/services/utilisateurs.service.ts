import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UtilisateursService {
    listeUtilisateurs: Array<Object>;

    constructor(private http: HttpClient) {
        // Liste de utilisateurs
        this.getUtlisateurs();
    }

    getUtlisateurs() {
        this.http.get<Array<Object>>('assets/modele/utilisateurs.json').subscribe(
            data => {
                console.log(data);
                this.listeUtilisateurs = data;
            }
        );
    }
}
