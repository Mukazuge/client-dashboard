import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingContainerComponent } from './loading-container.component';

describe('LoadingContainerComponent', () => {
  let component: LoadingContainerComponent;
  let fixture: ComponentFixture<LoadingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
