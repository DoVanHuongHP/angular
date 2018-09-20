import { AbstractControl } from '@angular/forms';
import { isError } from 'util';

export function passValidator(control: AbstractControl){
    if(control && control.value !== null){
        const confirm = control.value;
        const pass = control.root.get('password');
        if(pass) {
            const password = pass.value;
            
            if(password !== confirm){
                return {
                    isError: true,
                };
            }
        }
    }
    return null;
}


