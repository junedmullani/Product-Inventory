import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from "src/app/user.service";
import { MatDialogModule } from "@angular/material/dialog";
import { Ng2SearchPipeModule } from "ng2-search-filter";

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule,MatDialogModule,Ng2SearchPipeModule],
      declarations: [ ProductsComponent ],
      providers:[UserService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show Products', () => {
    const fixture = TestBed.createComponent(ProductsComponent);
    
    expect(fixture.nativeElement.querySelector('[data-test="products"]')).toBeTruthy();
  });

  it('should show search bar ', () => {
    const fixture = TestBed.createComponent(ProductsComponent);
    
    expect(fixture.nativeElement.querySelector('[data-test="searchBar"]')).toBeTruthy();
  });

  it('should show Graph ', () => {
    const fixture = TestBed.createComponent(ProductsComponent);
    
    expect(fixture.nativeElement.querySelector('[data-test="graph"]')).toBeTruthy();
  });

});
