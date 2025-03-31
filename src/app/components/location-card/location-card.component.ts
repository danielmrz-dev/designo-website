import { Component, Input } from '@angular/core';
import { ILocationCard } from '../../interfaces/location-card.interface';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrl: './location-card.component.scss'
})
export class LocationCardComponent {

  @Input({ required: true }) locationCardInfo!: ILocationCard;
}
