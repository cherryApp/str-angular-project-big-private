import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value: any[] | null, key: string, dir: number = 1): any[] | null {
    if (!Array.isArray(value) || !key) {
      return value;
    }

    return value.sort( (a, b) => {
      if (typeof a[key] === 'number' && typeof b[key] === 'number') {
        return (a[key] - b[key]) * dir;
      } else {
        return (
          ('' + a[key])
            .toLowerCase()
            .localeCompare(
              ('' + b[key]).toLowerCase()
            )
          ) * dir;
      }
    });
  }

}
