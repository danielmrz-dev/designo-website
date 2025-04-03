import { Component, HostListener } from '@angular/core';
import { IViewProjectCard } from '../../interfaces/view-project-card.interface';
import { featureCardsContent, viewProjectCardsContent } from '../../../data/cards-data';
import { IFeatureCard } from '../../interfaces/feature-card.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cardsContent: IViewProjectCard[] = viewProjectCardsContent;
  featureCardContent: IFeatureCard[] = featureCardsContent;


  @HostListener('window:resize', ['$event'])
  onResize() {
    this.cardsContent.forEach((card) => {
      this.getBackgroundImages(card);
    })
  }

  getBackgroundImages(card: IViewProjectCard): string {

    const width = window.innerWidth;

    if (width < 768) {
      return card.imageMobile;
    }

    if (width >= 768 && width < 1024) {
      return card.imageTablet;
    }

    return card.imageDesktop;
  }
}
