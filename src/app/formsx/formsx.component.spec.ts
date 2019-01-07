import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsxComponent } from './formsx.component';

describe('FormsxComponent', () => {
  let component: FormsxComponent;
  let fixture: ComponentFixture<FormsxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
