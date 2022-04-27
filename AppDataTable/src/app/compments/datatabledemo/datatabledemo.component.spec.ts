import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatabledemoComponent } from './datatabledemo.component';

describe('DatatabledemoComponent', () => {
  let component: DatatabledemoComponent;
  let fixture: ComponentFixture<DatatabledemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatabledemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatabledemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
