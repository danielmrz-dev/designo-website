import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [MatDrawer],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  
  @Input({ required: true }) drawer!: MatDrawer;

  constructor(private readonly router: Router) {}
  
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
