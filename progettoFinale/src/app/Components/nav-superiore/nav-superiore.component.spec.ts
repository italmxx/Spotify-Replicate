import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSuperioreComponent } from './nav-superiore.component';

describe('NavSuperioreComponent', () => {
  let component: NavSuperioreComponent;
  let fixture: ComponentFixture<NavSuperioreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavSuperioreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSuperioreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
