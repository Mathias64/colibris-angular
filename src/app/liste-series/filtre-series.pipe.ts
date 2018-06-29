import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtreSeries'
})
// export class FiltreSeriesPipe implements PipeTransform {

//     transform(values: any[], filtre: string, nivChoix: any[]): any[] {
//         console.log("niveaux choisis = ", nivChoix);
//         if (values && values.length) {
//             var valuesFilt = values.filter(v => {
//                 // Filtre sur le titre
//                 // if (filtre && filtre.length && v.title.toLowerCase().indexOf(filtre.toLowerCase()) === -1)
//                 //     return false;
//                 // Filtre sur l'auteur
//                 // if (filtre && v.author.toLowerCase().indexOf(filtre.toLowerCase()) === -1 )
//                 //     return false;
//                 // if (nivChoix && nivChoix.length) {
//                 //     for (let s = 0; s < v.series.length; s++) {
//                 //         if (v.series[s].niveau.indexOf(nivChoix) === -1)
//                 //             return false;
//                 //     }
//                 // }
//                 if (filter && Array.isArray(values) && filterItems) {
//                     let filterKeys = Object.keys(filter);
//                     let checkedItems = filterItems.filter(item => { return item.checked; });
//                     if (!checkedItems || checkedItems.length === 0) { return values; }

//                     return values.filter(item => {
//                         return filterKeys.some((keyName) => {
//                             return checkedItems.some((checkedItem) => {
//                                 return new RegExp(item[keyName], 'gi').test(checkedItem.value) || checkedItem.value === "";
//                             });
//                         });
//                     });
//                 } else {
//                     return values;
//                 }

//                 // return true;
//             });
//             console.log("filtrés = ", valuesFilt);
//         } else {
//             return values;
//         }
//     }
// }


export class NiveauxPipe implements PipeTransform {
    transform(items: any, filter: any, filterItems: Array<any>, isAnd: boolean): any {
        console.log('Filtering ..');
        if (filter && Array.isArray(items) && filterItems) {
            let filterKeys = Object.keys(filter);
            let checkedItems = filterItems.filter(item => { return item.checked; });
            if (!checkedItems || checkedItems.length === 0) { return items; }
            if (isAnd) {
                return items.filter(item =>
                    filterKeys.reduce((acc1, keyName) =>
                        (acc1 && checkedItems.reduce((acc2, checkedItem) => acc2 && new RegExp(item[keyName], 'gi').test(checkedItem.value) || checkedItem.value === "", true))
                        , true)
                );
            } else {
                return items.filter(item => {
                    return filterKeys.some((keyName) => {
                        return checkedItems.some((checkedItem) => {
                            return new RegExp(item[keyName], 'gi').test(checkedItem.value) || checkedItem.value === "";
                        });
                    });
                });
            }
        } else {
            return items;
        }
    }
}