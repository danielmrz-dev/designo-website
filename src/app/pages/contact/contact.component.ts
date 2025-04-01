import { Component } from '@angular/core';
import { ContactFormController } from './contact-form-controller';
import { FormBuilder } from '@angular/forms';
import { locationCardInfo } from '../../../data/cards-data';
import { ILocationCard } from '../../interfaces/location-card.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent extends ContactFormController {

  fieldOrder: string[] = ['name', 'email', 'phone'];
  locationCardsInfo: ILocationCard[] = locationCardInfo;
  
  constructor(private readonly fb: FormBuilder) {
    super(fb);
  }
  
  log() {
    console.log(this.contactForm.value);
  }
}
