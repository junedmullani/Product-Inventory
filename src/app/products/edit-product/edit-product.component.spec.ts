import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductComponent } from './edit-product.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {UserService} from 'src/app/user.service';
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { AppModule } from "src/app/app.module";


describe('EditProductComponent', () => {
  let component: EditProductComponent;
  let fixture: ComponentFixture<EditProductComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule,ReactiveFormsModule,FormsModule,AppModule],
      declarations: [ EditProductComponent ],
      providers:[UserService,{ provide: FormBuilder, useValue: formBuilder }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductComponent);
    component = fixture.componentInstance;
    component.addProduct=formBuilder.group({
      prod_name:null,
      prod_desc:null,
      manufacturer:null,
      price:null,
      quantity:null
    })
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should display edit form",()=>{
    const fixture=TestBed.createComponent(EditProductComponent);
    expect(fixture.nativeElement.querySelector('[data-test="editForm"]')).toBeTruthy();
  });
});
