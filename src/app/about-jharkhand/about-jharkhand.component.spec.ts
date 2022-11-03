import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutJharkhandComponent } from './about-jharkhand.component';

describe('AboutJharkhandComponent', () => {
  let component: AboutJharkhandComponent;
  let fixture: ComponentFixture<AboutJharkhandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutJharkhandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutJharkhandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
