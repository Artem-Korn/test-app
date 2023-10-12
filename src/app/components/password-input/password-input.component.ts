import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms'

@Component({
    selector: 'app-password-input',
    templateUrl: './password-input.component.html'
})
export class PasswordInputComponent implements OnInit {
    form: FormGroup;

    ngOnInit(): void {
        this.form = new FormGroup({
            password: new FormControl<string>('', [
                Validators.required,
                Validators.minLength(8),
                this.checkStrength()
            ])
        })
    }

    get password() { return this.form.get('password'); }

    checkStrength(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            let hasDigits: boolean = (/\d/).test(control.value);
            let hasLetters: boolean = (/[a-zA-Z]/).test(control.value);
            let hasSymbols: boolean = (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/).test(control.value);

            if (hasDigits && hasLetters && hasSymbols) {
                return null;
            } else if (hasDigits && (hasLetters || hasSymbols) || hasLetters && hasSymbols) {
                return { medium: true }
            } else {
                return { easy: true }
            }
        }
    }
}