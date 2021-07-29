import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProductComponent } from './info-product.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {UserService} from 'src/app/user.service';
import { CommonModule } from '@angular/common';


describe('InfoProductComponent', () => {
  let component: InfoProductComponent;
  let fixture: ComponentFixture<InfoProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule,CommonModule],
      declarations: [ InfoProductComponent ],
      providers:[UserService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display details of product ', () => {
    const fixture = TestBed.createComponent(InfoProductComponent);
    
    expect(fixture.nativeElement.querySelector('[data-test="product"]')).toBeTruthy();
  });
});
