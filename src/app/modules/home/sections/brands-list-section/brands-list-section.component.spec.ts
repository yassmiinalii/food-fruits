import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsListSectionComponent } from './brands-list-section.component';

describe('BrandsListSectionComponent', () => {
  let component: BrandsListSectionComponent;
  let fixture: ComponentFixture<BrandsListSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsListSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
