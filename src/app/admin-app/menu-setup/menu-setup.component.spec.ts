import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSetupComponent } from './menu-setup.component';

describe('MenuSetupComponent', () => {
  let component: MenuSetupComponent;
  let fixture: ComponentFixture<MenuSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSetupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
