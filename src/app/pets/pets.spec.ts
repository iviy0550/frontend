import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pets } from './pets';

declare const describe: (description: string, spec: () => void) => void;
declare const beforeEach: (spec: () => void | Promise<void>) => void;
declare const it: (description: string, spec: () => void | Promise<void>) => void;
declare const expect: (actual: unknown) => { toBeTruthy: () => void };

describe('Pets', () => {
  let component: Pets;
  let fixture: ComponentFixture<Pets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pets],
    }).compileComponents();

    fixture = TestBed.createComponent(Pets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
