import { Component, OnInit } from '@angular/core';
import {ChartOptions,ChartType,ChartDataSets} from "chart.js";
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {


  barChartLabels= new Array;
  allProducts;
  price=new Array();
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;
  
    public barChartColors:Array<any> = [
    { 
      backgroundColor: 'rgba(77,20,96,0.3)',
      borderColor: 'rgba(77,20,96,1)',
      pointBackgroundColor: 'rgba(77,20,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,20,96,1)'
    }
  ];
    public barChartData:any[] = [
      {data: this.price, label: 'Price'},
     
    ];
  
  
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(data=>{
      this.allProducts=data;
      for(let i=0;i<3;i++)
      {
        this.barChartLabels.push(this.allProducts[i].prod_name);
        this.price.push(this.allProducts[i].price);
      }
    })
  }

}
