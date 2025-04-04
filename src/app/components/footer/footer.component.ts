import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, last } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  showFooterCard: boolean = true;
  cardMargin: string = ''

  constructor(private readonly route: Router) {}

  ngOnInit(): void {
    this.route.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.route.url === '/contact') {
          this.showFooterCard = false;
        } else {
          this.showFooterCard = true;         
        }
      })
      this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    const width = window.innerWidth;
    if (width < 768) {
      this.cardMargin = '192px'
    }
    if (width >= 768 && width < 1024) {
      this.cardMargin = '250px'
    }
  }
}
