import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentGuidanceComponent } from './parent-guidance.component';

describe('ParentGuidanceComponent', () => {
  let component: ParentGuidanceComponent;
  let fixture: ComponentFixture<ParentGuidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentGuidanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
