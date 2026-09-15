import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Signup } from './signup';

declare function beforeEach(action: () => void | Promise<void>): void;
declare function describe(description: string, spec: () => void): void;
declare function it(description: string, spec: () => void): void;
declare function expect(actual: unknown): { toBeTruthy(): void };

describe('Signup', () => {
  let component: Signup;
  let fixture: ComponentFixture<Signup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

