import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtreSeries'
})
export class FiltreSeriesPipe implements PipeTransform {

    public transform(values: any[], filtre: string): any[] {
        // console.log(values[0], filtre);
        if (!values || !values.length) return [];
        if (!filtre) return values;
        console.log(filtre);
        // return values.filter(v => String(v).toLowerCase().indexOf(filtre.toLowerCase()) >= 0);
        return values.filter(v => {
            // Filtre sur le titre                                          Filtre sur l'auteur
            if (v.title.toLowerCase().indexOf(filtre.toLowerCase()) >= 0 || v.author.toLowerCase().indexOf(filtre.toLowerCase()) >= 0) {
                return true;
            }
            return false;
        });
    }

}

// Pipe de traitement des listes
@Pipe({
    name: 'filtreListes'
})
export class FiltreListesPipe implements PipeTransform {

    transform(values: any[], filter: string): any {
        if (!values || !values.length) return [];
        if (!filter) return values;

        return values.filter(v => v.toLowerCase().indexOf(filter.toLowerCase()) >= 0);
    }
}
