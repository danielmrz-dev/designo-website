import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  isScrollActive: boolean = true;

  toggleScroll() {
    this.isScrollActive = !this.isScrollActive;
    document.body.style.overflow = this.isScrollActive ? 'auto' : 'hidden';
  }
}
