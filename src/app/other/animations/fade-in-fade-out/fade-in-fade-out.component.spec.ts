import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeInFadeOutComponent } from './fade-in-fade-out.component';

describe('FadeInFadeOutComponent', () => {
  let component: FadeInFadeOutComponent;
  let fixture: ComponentFixture<FadeInFadeOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FadeInFadeOutComponent]
    });
    fixture = TestBed.createComponent(FadeInFadeOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
