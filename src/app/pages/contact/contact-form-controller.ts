import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

export class ContactFormController {

    contactForm!: FormGroup

    constructor(private readonly _fb: FormBuilder) {
        this.contactForm = this._fb.group({
            name: this._fb.control(''),
            email: this._fb.control(''),
            phone: this._fb.control(''),
            message: this._fb.control(''),
        })
    }

    get name(): FormControl {        
        return this.contactForm.get('name') as FormControl;
    }

    get email(): FormControl {        
        return this.contactForm.get('email') as FormControl;
    }

    get phone(): FormControl {        
        return this.contactForm.get('phone') as FormControl;
    }

    get message(): FormControl {        
        return this.contactForm.get('message') as FormControl;
    }
}