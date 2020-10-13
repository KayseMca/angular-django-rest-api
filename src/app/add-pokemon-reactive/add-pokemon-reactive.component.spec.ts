import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPokemonReactiveComponent } from './add-pokemon-reactive.component';

describe('AddPokemonReactiveComponent', () => {
  let component: AddPokemonReactiveComponent;
  let fixture: ComponentFixture<AddPokemonReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPokemonReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPokemonReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
