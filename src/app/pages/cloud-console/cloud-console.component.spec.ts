import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudConsoleComponent } from './cloud-console.component';

describe('CloudConsoleComponent', () => {
  let component: CloudConsoleComponent;
  let fixture: ComponentFixture<CloudConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
