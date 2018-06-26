import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../services/series.service';

@Component({
    selector: 'app-creation-serie',
    templateUrl: './creation-serie.component.html',
    styleUrls: ['./creation-serie.component.css']
})
export class CreationSerieComponent implements OnInit {

    constructor(private serieService: SeriesService) { }

    ngOnInit() {
    }

}
