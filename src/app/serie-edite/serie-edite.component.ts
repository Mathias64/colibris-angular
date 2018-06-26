import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from '../services/series.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-serie-edite',
    templateUrl: './serie-edite.component.html',
    styleUrls: ['./serie-edite.component.css']
})
export class SerieEditeComponent implements OnInit {
    serie: object;
    idSerie: number;
    constructor(private routeParams: ActivatedRoute, private seriesService: SeriesService) { }

    ngOnInit() {
        this.routeParams.params.subscribe(
            params => {
                console.log(params);
                this.idSerie = +params['i'];
                this.serie = this.seriesService.listeEditions[this.idSerie];
                console.log(this.serie);
            }
        )
    }
    // Mise à jour de la série
    edite(f: NgForm) {
        console.log(f.value);
        this.seriesService.listeEditions[this.idSerie] = f.value;
    }
}
