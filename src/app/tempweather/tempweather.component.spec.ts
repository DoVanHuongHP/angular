import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempweatherComponent } from './tempweather.component';

describe('TempweatherComponent', () => {
  let component: TempweatherComponent;
  let fixture: ComponentFixture<TempweatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempweatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
