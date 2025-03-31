import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { capitalize } from '../../utils/format-page-title';
import { IProjectCard } from '../../interfaces/project-card.interface';
import { pageTitlesAndContent, viewProjectCardsContent, projectCardsInfo } from '../../../data/cards-data';
import { IViewProjectCard } from '../../interfaces/view-project-card.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  pageTitle: string = '';
  pageDescription: string = '';
  projectCardsInfo: IProjectCard[] = projectCardsInfo;
  viewProjectCardsContent: IViewProjectCard[] = viewProjectCardsContent;
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((value) => {
      const category = value.get('category');
      if (category) {
        this.pageTitle = capitalize(category);
        this.pageDescription = pageTitlesAndContent.find(
          page => page.title.toLowerCase() === this.pageTitle.toLowerCase()
        )!.description;
        this.titleService.setTitle(`Designo - ${capitalize(category)}`)
      }
    })
  }

}
