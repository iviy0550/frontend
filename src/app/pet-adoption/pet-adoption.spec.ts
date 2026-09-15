import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetAdoption } from './pet-adoption';

describe('PetAdoption', () => {
  let component: PetAdoption;
  let fixture: ComponentFixture<PetAdoption>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetAdoption],
    }).compileComponents();

    fixture = TestBed.createComponent(PetAdoption);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
