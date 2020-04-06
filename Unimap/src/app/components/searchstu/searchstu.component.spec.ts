import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchstuComponent } from './searchstu.component';

describe('SearchstuComponent', () => {
  let component: SearchstuComponent;
  let fixture: ComponentFixture<SearchstuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchstuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchstuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
