import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RastreiaComponent } from './rastreia.component';

describe('RastreiaComponent', () => {
  let component: RastreiaComponent;
  let fixture: ComponentFixture<RastreiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RastreiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RastreiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
