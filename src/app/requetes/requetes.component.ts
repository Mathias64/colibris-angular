import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../services/series.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-requetes',
  templateUrl: './requetes.component.html',
  styleUrls: ['../liste-series/liste-series.component.css',
              '../../assets/css/iThing_1.css']
})
export class RequetesComponent implements OnInit {
    serie: object;
    titre: string;
    listedemandes:Array<object>;

    constructor(private serieService: SeriesService, private titleService: Title) {
        this.titleService.setTitle("Gestion des requêtes");
        this.titre = "Gestion des requêtes";
        this.serie = {
            title : "Les Fourberies de Scapin",
            author: "Molière",
            professeur: "Machin",
            college: "Simin Palay (lescar)",
            classe: "4ème B",
            published_date: "2016-04-13T12:00:00Z",
            cover: "https://images-na.ssl-images-amazon.com/images/I/51JW7IBS-YL._SX345_BO1,204,203,200_.jpg",
            date_demande: "2018-04-04T",
            date_debut: "2018-05-10T",
            date_fin: "2018-06-10T"
        };
        this.listedemandes = [this.serie, this.serie, this.serie];
    }

    ngOnInit() {
    }
  
}
