import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationComponentsComponent } from './documentation-components.component';

describe('DocumentationComponentsComponent', () => {
  let component: DocumentationComponentsComponent;
  let fixture: ComponentFixture<DocumentationComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentationComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
