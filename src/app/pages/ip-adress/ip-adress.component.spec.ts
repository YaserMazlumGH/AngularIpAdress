import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpAdressComponent } from './ip-adress.component';

describe('IpAdressComponent', () => {
  let component: IpAdressComponent;
  let fixture: ComponentFixture<IpAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpAdressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
