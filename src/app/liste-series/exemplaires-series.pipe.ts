import { Pipe, PipeTransform } from '@angular/core';

// Filtre les séries suivant leur nombre d'exemplaires
@Pipe({
    name: 'nbExemplairesSeriePipe'
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

// Filtre les éditions suivant le nombre d'exemplaires dans les séries de l'éditions
@Pipe({
    name: 'nbExemplairesEditionPipe'
})
export class ExemplaireseditionsPipe implements PipeTransform {

    transform(editions: any[], nbExemplaires: number): any[] {
        if (!editions || !editions.length) return [];
        if (!nbExemplaires) return editions;

        return editions.filter(edition => {
            for (let i = 0; i < edition.series.length; i++) {
                // Filtre sur le nombre d'exemplaires
                if (edition.series[i].quantite >= nbExemplaires)
                    return true;
                return false;
            }            
        });
    }

}
