import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../services/series.service';

@Component({
    selector: 'app-liste-series',
    templateUrl: './liste-series.component.html',
    styleUrls: ['./liste-series.component.css',
                '../../assets/css/iThing_1.css']
})
export class ListeSeriesComponent implements OnInit {
    titre: String;

    constructor(private serieService: SeriesService) {
        this.titre = "Liste des séries disponibles";
    }

    ngOnInit() {
    }

}
