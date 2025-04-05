import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesComponentesComponent } from './clientes-componentes.component';

describe('ClientesComponentesComponent', () => {
  let component: ClientesComponentesComponent;
  let fixture: ComponentFixture<ClientesComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesComponentesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
