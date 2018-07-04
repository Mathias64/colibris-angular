import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../services/series.service';
import { Title } from '@angular/platform-browser';
import { TitreSeriesPipe } from '../liste-series/titre-series.pipe';

@Component({
    selector: 'app-recherche',
    templateUrl: './recherche.component.html',
    styleUrls: ['./recherche.component.css',
                '../../assets/css/iThing_1.css']
})
export class RechercheComponent implements OnInit {
    titre: string;

    constructor(private seriesService: SeriesService,
                private titleService: Title,
                public titrePipe: TitreSeriesPipe
            ) {
        this.titleService.setTitle("Recherche");
        this.titre = "Liste des séries disponibles";
    }

    ngOnInit() {
    }

}
