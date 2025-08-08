import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLoaderComponent } from './main-loader.component';

describe('MainLoaderComponent', () => {
  let component: MainLoaderComponent;
  let fixture: ComponentFixture<MainLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
