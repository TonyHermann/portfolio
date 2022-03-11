import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectCardMobileComponent } from './proyect-card-mobile.component';

describe('ProyectCardMobileComponent', () => {
  let component: ProyectCardMobileComponent;
  let fixture: ComponentFixture<ProyectCardMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectCardMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectCardMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
