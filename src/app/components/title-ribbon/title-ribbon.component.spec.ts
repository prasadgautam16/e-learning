import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleRibbonComponent } from './title-ribbon.component';

describe('TitleRibbonComponent', () => {
  let component: TitleRibbonComponent;
  let fixture: ComponentFixture<TitleRibbonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleRibbonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
