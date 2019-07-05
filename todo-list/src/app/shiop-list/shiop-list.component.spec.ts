import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiopListComponent } from './shiop-list.component';

describe('ShiopListComponent', () => {
  let component: ShiopListComponent;
  let fixture: ComponentFixture<ShiopListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiopListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
