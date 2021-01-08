/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SwimlaneComponent } from './swimlane.component';

describe('TwoUserRowComponent', () => {
  let component: SwimlaneComponent ;
  let fixture: ComponentFixture<SwimlaneComponent >;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimlaneComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
