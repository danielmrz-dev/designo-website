import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { locationsUrls } from '../../../data/cards-data';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent {

  canada: SafeResourceUrl = "";
  australia: SafeResourceUrl = "";
  uk: SafeResourceUrl = "";
  constructor(private readonly sanitizer: DomSanitizer) {
  }
  ngOnInit(): void {
    this.canada = this.sanitizeUrl(locationsUrls.canada);    
    this.australia = this.sanitizeUrl(locationsUrls.australia);    
    this.uk = this.sanitizeUrl(locationsUrls.uk);    
  }
  private sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
