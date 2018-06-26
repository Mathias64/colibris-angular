import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filtreISBN'
})
export class FiltreISBNPipe implements PipeTransform {

    transform(values: any[], isbn: number): any[] {
        return values.filter(v => {
            if (v.ISBN13.indexOf(isbn) >= 0) return true;
            return false;
        });
    }
}
