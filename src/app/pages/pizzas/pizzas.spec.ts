import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pizzas } from './pizzas';
import { provideHttpClient } from '@angular/common/http';

describe('Pizzas', () => {
  let component: Pizzas;
  let fixture: ComponentFixture<Pizzas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pizzas],
      providers: [
        provideHttpClient(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pizzas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
