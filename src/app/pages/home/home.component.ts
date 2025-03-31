import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cardsContent = [
    {
      title: 'Web Design',
      image: 'home/mobile/image-web-design.jpg',
      link: 'web-design'
    },
    {
      title: 'App Design',
      image: 'home/mobile/image-app-design.jpg',
      link: 'app-design'
    },
    {
      title: 'Graphic Design',
      image: 'home/mobile/image-graphic-design.jpg',
      link: 'graphic-design'
    },
  ]

  featureCardContent = [
    {
      image: 'home/desktop/illustration-passionate.svg',
      title: 'Passionate',
      paragraph: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.'
    },
    {
      image: 'home/desktop/illustration-resourceful.svg',
      title: 'Resourceful',
      paragraph: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.'
    },
    {
      image: 'home/desktop/illustration-friendly.svg',
      title: 'Friendly',
      paragraph: ' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.'
    },
  ]
}
