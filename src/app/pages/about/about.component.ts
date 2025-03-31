import { Component } from '@angular/core';
import { ILocationCard } from '../../interfaces/location-card.interface';
import { locationCardInfo } from '../../../data/cards-data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  locationCardsInfo: ILocationCard[] = locationCardInfo;
}
