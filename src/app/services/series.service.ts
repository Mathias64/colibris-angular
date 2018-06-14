import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SerieModele } from '../modele/seriemodele';
import { EditionModele } from '../modele/editionmodele';

@Injectable({
    providedIn: 'root'
})
export class SeriesService {
    serie: EditionModele;
    listeSeries: Array<Object>;
    listeEditeurs: Array<Object>;

    constructor(private http:HttpClient) {
        // Série par défault en cas de non connexion avec la base
        this.serie = {
            title: "Les Fourberies de Scapin",
            author: "Molière",
            publisher: 0,
            collection: 0,
            language: "Français",
            publishedDate: "2016-04-13T12:00:00Z",
            pages: 144,
            cover: "https://images-na.ssl-images-amazon.com/images/I/51JW7IBS-YL._SX345_BO1,204,203,200_.jpg",
            ISBN10: 2013949677,
            ISBN13: 9782013949675,
            series: []
        };
        // Liste de séries
        this.getEditeurs();

    }

    getSeries() {
        this.http.get<Array<Object>>('assets/modele/series.json').subscribe (
            data => {
                // console.log(data);
                this.listeSeries = data;
            }
        );
    }

    getEditeurs() {
        this.http.get<Array<Object>>('assets/modele/editeurs.json').subscribe (
            data => {
                // console.log(data);
                this.listeEditeurs = data;
            }
        );
        this.getSeries();
    }
}
