import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListSectionComponent } from './category-list-section.component';

describe('CategoryListSectionComponent', () => {
  let component: CategoryListSectionComponent;
  let fixture: ComponentFixture<CategoryListSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryListSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
