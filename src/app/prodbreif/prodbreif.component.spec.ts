import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdbreifComponent } from './prodbreif.component';

describe('ProdbreifComponent', () => {
  let component: ProdbreifComponent;
  let fixture: ComponentFixture<ProdbreifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdbreifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdbreifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
