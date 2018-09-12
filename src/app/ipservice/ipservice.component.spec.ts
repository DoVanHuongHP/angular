import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IPserviceComponent } from './ipservice.component';

describe('IPserviceComponent', () => {
  let component: IPserviceComponent;
  let fixture: ComponentFixture<IPserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IPserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IPserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
