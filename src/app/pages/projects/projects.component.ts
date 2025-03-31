import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { capitalize } from '../../utils/format-page-title';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((value) => {
      const category = value.get('category');
      if (category) {
        this.titleService.setTitle(`Designo - ${capitalize(category)}`)        
      }
    })
  }

}
