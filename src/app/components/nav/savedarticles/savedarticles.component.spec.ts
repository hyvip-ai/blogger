import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedarticlesComponent } from './savedarticles.component';

describe('SavedarticlesComponent', () => {
  let component: SavedarticlesComponent;
  let fixture: ComponentFixture<SavedarticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedarticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
