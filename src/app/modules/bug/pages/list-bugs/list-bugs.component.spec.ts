import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBugsComponent } from './list-bugs.component';

describe('ListBugsComponent', () => {
  let component: ListBugsComponent;
  let fixture: ComponentFixture<ListBugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
