import { Pipe, PipeTransform } from '@angular/core';
import { IProjectCard } from '../../interfaces/project-card.interface';

@Pipe({
  name: 'filterProjectCards'
})
export class FilterProjectCardsPipe implements PipeTransform {

  transform(cardsList: IProjectCard[], pageTitle: string): IProjectCard[] {
    return cardsList.filter(cards => cards.page.toLowerCase() === pageTitle.toLowerCase());
  }

}
