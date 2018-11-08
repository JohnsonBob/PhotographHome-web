import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprettyProjectComponent } from './spretty-project.component';

describe('SprettyProjectComponent', () => {
  let component: SprettyProjectComponent;
  let fixture: ComponentFixture<SprettyProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprettyProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprettyProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
