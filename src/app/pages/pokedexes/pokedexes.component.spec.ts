import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexesComponent } from './pokedexes.component';

describe('PokedexesComponent', () => {
  let component: PokedexesComponent;
  let fixture: ComponentFixture<PokedexesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
