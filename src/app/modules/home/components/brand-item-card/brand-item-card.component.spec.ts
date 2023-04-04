import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandItemCardComponent } from './brand-item-card.component';

describe('BrandItemCardComponent', () => {
  let component: BrandItemCardComponent;
  let fixture: ComponentFixture<BrandItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandItemCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
