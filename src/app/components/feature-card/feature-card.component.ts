import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss'
})
export class FeatureCardComponent {

  @Input({ required: true }) image: string = ''
  @Input({ required: true }) title: string = ''
  @Input({ required: true }) paragraph: string = ''
}
