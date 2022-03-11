import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTopNavbarComponent } from './mobile-top-navbar.component';

describe('MobileTopNavbarComponent', () => {
  let component: MobileTopNavbarComponent;
  let fixture: ComponentFixture<MobileTopNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileTopNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTopNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
