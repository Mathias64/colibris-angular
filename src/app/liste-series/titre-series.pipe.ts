import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titrePipe'
})
export class TitreSeriesPipe implements PipeTransform {

    transform(values: any[], filtre: string): any[] {
        // console.log(values[0], filtre);
        if (!values || !values.length) return [];
        if (!filtre) return values;
        // console.log(filtre);
        return values.filter(v => {
            // Filtre sur le titre et l'auteur
            if(v.title.toLowerCase().indexOf(filtre.toLowerCase()) >=0 || v.author.toLowerCase().indexOf(filtre.toLowerCase()) >=0) {
                return true ;
            }
            return false;
        });
        // if (values && values.length) {
        //     return values.filter(v => {
        //         // Filtre sur le titre
        //         if (filtre && filtre.length && v.title.toLowerCase().indexOf(filtre.toLowerCase()) === -1)
        //             return false;
        //         // Filtre sur l'auteur
        //         if (filtre && v.author.toLowerCase().indexOf(filtre.toLowerCase()) === -1 )
        //             return false;
        //     });
        // } else {
        //     return [];
        // }
    }
}
