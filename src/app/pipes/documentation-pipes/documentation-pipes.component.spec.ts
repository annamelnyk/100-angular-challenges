import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationPipesComponent } from './documentation-pipes.component';

describe('DocumentationPipesComponent', () => {
  let component: DocumentationPipesComponent;
  let fixture: ComponentFixture<DocumentationPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationPipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentationPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
