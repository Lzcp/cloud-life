import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudLoginComponent } from './cloud-login.component';

describe('CloudLoginComponent', () => {
  let component: CloudLoginComponent;
  let fixture: ComponentFixture<CloudLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
