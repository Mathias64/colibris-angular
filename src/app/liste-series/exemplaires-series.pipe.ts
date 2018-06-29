import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'exemplairesSeries'
})
export class ExemplairesSeriesPipe implements PipeTransform {

    transform(series: any[], nbExemplaires: number): any[] {
        if (!series || !series.length) return [];
        if (!nbExemplaires) return series;

        return series.filter(serie => {
            // Filtre sur le nombre d'exemplaires
            if (serie.quantite >= nbExemplaires)
                return true;
            return false;
        });
    }

}
