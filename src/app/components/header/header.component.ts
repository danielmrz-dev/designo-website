import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [MatDrawer],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Input({ required: true }) drawer!: MatDrawer;
  
}
