import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtreSeries'
})
export class FiltreSeriesPipe implements PipeTransform {

    transform(values: any[], filtre: string): any[] {
        if (!values || !values.length) return [];
        if (!filtre) return values;

        return values.filter(v => {
            // Filtre sur le titre
            if (v.title.toLowerCase().indexOf(filtre.toLowerCase()) >= 0 ||
                v.author.toLowerCase().indexOf(filtre.toLowerCase()) >= 0)
                return true;
            return false;
        });
    }
}
