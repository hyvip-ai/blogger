import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrticleComponent } from './myrticle.component';

describe('MyrticleComponent', () => {
  let component: MyrticleComponent;
  let fixture: ComponentFixture<MyrticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyrticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
