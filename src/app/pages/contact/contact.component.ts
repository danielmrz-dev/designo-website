import { Component } from '@angular/core';
import { ContactFormController } from './contact-form-controller';
import { FormBuilder } from '@angular/forms';
import { locationCardInfo } from '../../../data/cards-data';
import { ILocationCard } from '../../interfaces/location-card.interface';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../../components/confirmation-modal/confirmation-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent extends ContactFormController {

  locationCardsInfo: ILocationCard[] = locationCardInfo;
  
  constructor(
    private readonly fb: FormBuilder,
    private readonly dialog: MatDialog,
    private readonly router: Router
  ) {
    super(fb);
  }
  
  submitContactForm() {
    this.dialog.open(ConfirmationModalComponent).afterClosed().subscribe(
      () => {
        this.router.navigate(['/home']);
      }
    );
  }
}
