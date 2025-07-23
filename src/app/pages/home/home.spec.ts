import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    expect(component.total).toBe(60);

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#total')?.textContent).toContain('Total: 60');

    const button = compiled.querySelector('.increment') as HTMLButtonElement;
    button?.click();
    fixture.componentRef.setInput('total', 61);
    fixture.detectChanges();
    expect(compiled.querySelector('#total')?.textContent).toContain('Total: 61');
  });
});
