import { Pipe, PipeTransform } from '@angular/core';
import { IViewProjectCard } from '../../interfaces/view-project-card.interface';

@Pipe({
  name: 'filterViewProjectsCards'
})
export class FilterViewProjectsCardsPipe implements PipeTransform {

  transform(cardsList: IViewProjectCard[], pageTitle: string): IViewProjectCard[] {
    return cardsList.filter(cards => cards.title.toLowerCase() != pageTitle.toLowerCase());
  }

}
