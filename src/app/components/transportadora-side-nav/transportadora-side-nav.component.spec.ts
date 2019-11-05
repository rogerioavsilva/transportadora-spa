import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportadoraSideNavComponent } from './transportadora-side-nav.component';

describe('TransportadoraSideNavComponent', () => {
  let component: TransportadoraSideNavComponent;
  let fixture: ComponentFixture<TransportadoraSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportadoraSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportadoraSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
