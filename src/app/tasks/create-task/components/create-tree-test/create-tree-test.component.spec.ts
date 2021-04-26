import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTreeTestComponent } from './create-tree-test.component';

describe('CreateTreeTestComponent', () => {
  let component: CreateTreeTestComponent;
  let fixture: ComponentFixture<CreateTreeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTreeTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTreeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
