import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../services/series.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-liste-series',
    templateUrl: './liste-series.component.html',
    styleUrls: ['./liste-series.component.css',
                '../../assets/css/iThing_1.css']
})
export class ListeSeriesComponent implements OnInit {
    title:string;
    titre:string;

    constructor(private serieService: SeriesService, private titleService: Title) {
        this.titleService.setTitle("Recherche");
        this.titre = "Liste des séries disponibles";
    }

    ngOnInit() {
    }

}
