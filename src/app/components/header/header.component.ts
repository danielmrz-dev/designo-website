import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [MatDrawer],
})
export class HeaderComponent {
  
  isMenuOpen: boolean = false;
  @Input({ required: true }) drawer!: MatDrawer;

  constructor(
    private readonly router: Router,
  ) {}
  
  navigateToHome() {
    this.router.navigate(['/home']);
  }

  toggleMenu(event: Event): void {
    event.preventDefault(); 
    event.stopPropagation();
    if (this.drawer.opened) {
      this.drawer.toggle();
      this.isMenuOpen = true;
      return;
    }
    this.drawer.toggle();
    this.isMenuOpen = false;
  }

}
