import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsFormComponent } from './cats-form.component';

describe('CatsFormComponent', () => {
  let component: CatsFormComponent;
  let fixture: ComponentFixture<CatsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
