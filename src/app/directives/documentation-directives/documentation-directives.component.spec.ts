import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationDirectivesComponent } from './documentation-directives.component';

describe('DocumentationDirectivesComponent', () => {
  let component: DocumentationDirectivesComponent;
  let fixture: ComponentFixture<DocumentationDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentationDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
