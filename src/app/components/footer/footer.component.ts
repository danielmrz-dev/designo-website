import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, last } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  showFooterCard: boolean = true

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
  }
}
