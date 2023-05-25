import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationOtherComponent } from './documentation-other.component';

describe('DocumentationOtherComponent', () => {
  let component: DocumentationOtherComponent;
  let fixture: ComponentFixture<DocumentationOtherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentationOtherComponent]
    });
    fixture = TestBed.createComponent(DocumentationOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
