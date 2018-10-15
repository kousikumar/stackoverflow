import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesBlogComponent } from './ques-blog.component';

describe('QuesBlogComponent', () => {
  let component: QuesBlogComponent;
  let fixture: ComponentFixture<QuesBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuesBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
