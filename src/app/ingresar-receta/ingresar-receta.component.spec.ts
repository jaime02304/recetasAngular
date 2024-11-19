import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarRecetaComponent } from './ingresar-receta.component';

describe('IngresarRecetaComponent', () => {
  let component: IngresarRecetaComponent;
  let fixture: ComponentFixture<IngresarRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresarRecetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
