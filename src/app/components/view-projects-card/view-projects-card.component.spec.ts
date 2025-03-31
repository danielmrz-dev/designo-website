import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjectsCardComponent } from './view-projects-card.component';

describe('ViewProjectsCardComponent', () => {
  let component: ViewProjectsCardComponent;
  let fixture: ComponentFixture<ViewProjectsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewProjectsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProjectsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
