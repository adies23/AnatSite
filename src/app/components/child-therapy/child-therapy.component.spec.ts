import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTherapyComponent } from './child-therapy.component';

describe('ChildTherapyComponent', () => {
  let component: ChildTherapyComponent;
  let fixture: ComponentFixture<ChildTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildTherapyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
