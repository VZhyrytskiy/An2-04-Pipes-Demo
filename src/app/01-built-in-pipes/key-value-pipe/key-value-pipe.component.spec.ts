import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyValuePipeComponent } from './key-value-pipe.component';

describe('KeyValuePipeComponent', () => {
  let component: KeyValuePipeComponent;
  let fixture: ComponentFixture<KeyValuePipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyValuePipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyValuePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
