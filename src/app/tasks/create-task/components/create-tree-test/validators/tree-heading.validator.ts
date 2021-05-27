import { AbstractControl, ValidatorFn } from "@angular/forms";


export function treeHeadingValidator(validHeadings): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = validHeadings.indexOf(control.value) <= -1;
    return forbidden ? { headingValid: { value: control.value } } : null;
  };
}
