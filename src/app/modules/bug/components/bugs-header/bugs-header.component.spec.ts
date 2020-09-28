import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsHeaderComponent } from './bugs-header.component';

describe('BugsHeaderComponent', () => {
  let component: BugsHeaderComponent;
  let fixture: ComponentFixture<BugsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
