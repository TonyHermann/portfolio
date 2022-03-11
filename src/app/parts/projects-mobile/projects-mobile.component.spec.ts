import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsMobileComponent } from './projects-mobile.component';

describe('ProjectsMobileComponent', () => {
  let component: ProjectsMobileComponent;
  let fixture: ComponentFixture<ProjectsMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
