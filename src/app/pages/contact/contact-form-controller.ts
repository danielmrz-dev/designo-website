import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class ContactFormController {

    contactForm!: FormGroup

    includeSpaces = { 
        'S': { pattern: new RegExp('[a-zA-ZÀ-ÿ ]') } 
    };

    constructor(private readonly _fb: FormBuilder) {
        this.contactForm = this._fb.group({
            name: this._fb.control('dsaa', [Validators.required]),
            email: this._fb.control('dan@dan.com', [Validators.required]),
            phone: this._fb.control('99999999999', [Validators.required, Validators.minLength(11)]),
            message: this._fb.control('hahaha', [Validators.required]),
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