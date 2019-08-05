import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2PrismComponent } from './ng2-prism.component';

describe('Ng2PrismComponent', () => {
  let component: Ng2PrismComponent;
  let fixture: ComponentFixture<Ng2PrismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2PrismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2PrismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
