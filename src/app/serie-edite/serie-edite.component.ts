import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from '../services/series.service';

@Component({
    selector: 'app-serie-edite',
    templateUrl: './serie-edite.component.html',
    styleUrls: ['./serie-edite.component.css']
})
export class SerieEditeComponent implements OnInit {
    serie: object;
    constructor(private routeParams: ActivatedRoute, private listeSeries: SeriesService) { }

    ngOnInit() {
        this.routeParams.params.subscribe(
            params => {
                console.log(params);
                this.serie = this.listeSeries.listeSeries[+params['i']];
                console.log(this.serie);
            }
        )
    }
}
