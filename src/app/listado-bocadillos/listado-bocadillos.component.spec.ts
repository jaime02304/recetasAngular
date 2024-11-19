import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoBocadillosComponent } from './listado-bocadillos.component';

describe('ListadoBocadillosComponent', () => {
  let component: ListadoBocadillosComponent;
  let fixture: ComponentFixture<ListadoBocadillosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoBocadillosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoBocadillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
