import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioComponentsComponent } from './portfolio-components.component';

describe('PortfolioComponentsComponent', () => {
  let component: PortfolioComponentsComponent;
  let fixture: ComponentFixture<PortfolioComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
