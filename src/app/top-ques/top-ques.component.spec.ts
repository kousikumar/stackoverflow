import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopQuesComponent } from './top-ques.component';

describe('TopQuesComponent', () => {
  let component: TopQuesComponent;
  let fixture: ComponentFixture<TopQuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopQuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
