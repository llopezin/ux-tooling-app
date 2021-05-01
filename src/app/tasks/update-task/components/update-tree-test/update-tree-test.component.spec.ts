import { ComponentFixture, TestBed } from '@angular/core/testing';

import { updateTreeTestComponent } from './update-tree-test.component';

describe('updateTreeTestComponent', () => {
  let component: updateTreeTestComponent;
  let fixture: ComponentFixture<updateTreeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ updateTreeTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.updateComponent(updateTreeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should update', () => {
    expect(component).toBeTruthy();
  });
});
