import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../services/series.service';
import { Title } from '@angular/platform-browser';
import { CollegesService } from '../services/colleges.service';
import { NiveauxPipe } from './filtre-series.pipe';
// import { CheckboxGroupComponent } from '../checkbox-group/checkbox-group.component';
// import { CheckboxComponent } from '../checkbox/checkbox.component';

@Component({
    selector: 'app-liste-series',
    templateUrl: './liste-series.component.html',
    styleUrls: ['./liste-series.component.css',
                '../../assets/css/iThing_1.css']
})
export class ListeSeriesComponent implements OnInit {
    public title:string;
    public titre:string;
 
    public items:Array<any>;
    public filterItems:Array<any> = [
        { value: '6', checked: false },
        { value: '5', checked: false },
        { value: '4', checked: false },
        { value: '3', checked: false }
    ];


    constructor(private seriesService: SeriesService,
                private collegesService: CollegesService,
                private titleService: Title,
                public  niveauxPipe: NiveauxPipe
                // private checkBoxGroup: CheckboxGroupComponent,
                // private checkBox: CheckboxComponent
            ) {
        this.titleService.setTitle("Recherche");
        this.titre = "Liste des séries disponibles";
    }

    checked() {
        return this.filterItems.filter(item => { return item.checked });
    }
    
    ngOnInit() {}
}
