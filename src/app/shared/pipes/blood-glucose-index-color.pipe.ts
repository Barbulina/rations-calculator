import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bloodGlucoseIndexColor'
})
export class BloodGlucoseIndexColorPipe implements PipeTransform {
  transform(value: number | undefined, ...args: unknown[]): string {
    if (!value) return 'green';
    if (value >= 70) return 'red';
    if (value >= 59) return 'orange';

    return 'green';
  }
}
