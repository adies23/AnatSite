import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionalTherapyComponent } from './emotional-therapy.component';

describe('EmotionalTherapyComponent', () => {
  let component: EmotionalTherapyComponent;
  let fixture: ComponentFixture<EmotionalTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmotionalTherapyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmotionalTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
