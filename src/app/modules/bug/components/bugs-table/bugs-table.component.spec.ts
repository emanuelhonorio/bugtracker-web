import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsTableComponent } from './bugs-table.component';

describe('BugsTableComponent', () => {
  let component: BugsTableComponent;
  let fixture: ComponentFixture<BugsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
