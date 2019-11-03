import { Component, OnInit ,ViewChild} from '@angular/core';
import {ProductService} from '../../services/product.service';
// import data  from '../../data.json';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {ErrorService} from '../../error/error.service';
import {Product} from '../../model';

interface City {
  name: string;
  code: string;
}


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
//   animations: [
//     trigger('rowExpansionTrigger', [
//         state('void', style({
//             transform: 'translateX(-10%)',
//             opacity: 0
//         })),
//         state('active', style({
//             transform: 'translateX(0)',
//             opacity: 1
//         })),
//         transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
//     ])
// ]
})



export class ProductComponent implements OnInit {
@ViewChild('table',{static:false}) table:any;
  constructor(private prod:ProductService,private http:HttpClient,private _serve:ErrorService) {
    setTimeout(()=>{this.disable = true}, 5000)
   }
 //json:any =data;
 productRes: Product[];
 error:string = "";
 filterData:Product[];
 datasource: any=[];

 cols:any[];
 loading: boolean;
 pageSizeOptions = [3, 6, 50, {showAll: 'All'}]
 disable = false;
 placeholderText = "Select Option";
 totalRecords: number;
 selectedColumns: any[];
 yearFilter: number;
 yearTimeout: any;
 companies:any=[];
 //dropdown 
 respCar: any = 'spine';

selectedCars1: string[] = [];

selectedCars2: string[] = ['spine', 'carpal','joints'];
//curd var
displayDialog: boolean;
newCar: boolean;
car: Product = {};
selectedCar: Product;  rowGroupMetadata: any;


 cities2 = [
  {name: 'New York', code: 'NY'},
  {name: 'Rome', code: 'RM'},
  {name: 'London', code: 'LDN'},
  {name: 'Istanbul', code: 'IST'},
  {name: 'Paris', code: 'PRS'}
];
selectedCity2: City;

  ngOnInit() {
   // console.log(this.json);
    this.getProducts();
     this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'name', header: 'NAME' },
            { field: 'category', header: 'CATEGORY' },
             { field: 'subcategory', header: 'SUBCATEGORY' },
            { field: 'company', header: 'COMPANY' },
             { field: 'brand', header: 'BRAND' },
            { field: 'unit', header: 'UNIT' },
            { field: 'quantity', header: 'QUANTITY' },
            { field: 'mrp', header: 'mrp' }
        ];
        this.selectedColumns = this.cols;
        this.loading = true;
        setTimeout(()=> {this.placeholderText = 'It has changed'}, 5000);

        this.companies = [
          { label: 'All', value: 'all' },
          { label: 'Total Joint', value: 'total joint' },
          { label: 'Carpal Tunnel', value: 'carpal tunnel' },
          { label: 'Spine', value: 'spine' },
         
         
        ];

        //authorization
          
      }

      showDialogToAdd() {
        this.newCar = true;
        this.car = {};
        this.displayDialog = true;
    }

getProducts(){
   this.prod.getProducts().subscribe((res:any)=>{
    console.log("prod res",res);
    console.log("prod res",res.length);
    console.log("prod res",typeof(res));
  //  this.datasource =res;
    this.productRes = res ;
   this.filterData = this.productRes ;
    this.totalRecords = (<any>this.productRes).length;
   
  },
    error =>{
       this._serve.handleError(error);
      this.error = error;
          console.log('There was an error while retrieving Posts !!!' + error);  
    }
    )
  }


  loadCarsLazy(event) {  
    this.loading = true;

    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    //imitate db connection over a network
    setTimeout(() => {
        if (this.productRes) {
            this.filterData = this.productRes.slice(event.first, (event.first + event.rows));
            this.loading = false;
        }
    }, 1000);
}

buttonClick(){
  console.log('button clicked!')
}



respToggle(car) {
  console.log("acar",car)
  this.respCar = car.label;
}

checkIfResp(event) {
  console.log("dropdown e,",event);
  var search = event.toLowerCase();
  if(!event || event == undefined || event =="" || event == 'all'){
    return this.filterData = this.productRes;
  } 
  if(!this.productRes) return null;
  if(event){
   // if(Array.isArray(this.productRes)){
       var filterData =  this.productRes.filter((ele)=>{
          return JSON.stringify(ele).toLowerCase().includes(search)
        })
     // }
    }
    
 console.log("filter",this.filterData);
 this.filterData = filterData;
  // var respCarIndex = (this.respCar) ? this.selectedCars2.findIndex(x => x === this.respCar) : 0;
  // console.log("respCarIndex",respCarIndex)
  // if (respCarIndex === -1) {
  //   this.selectedCars2.push(this.respCar);
  //    }
  }


  //curd data
  save() {
    let cars = [... this.filterData];
    if (this.newCar)
        cars.push(this.car);
    else
        cars[ this.filterData.indexOf(this.selectedCar)] = this.car;

    this.filterData = cars;
    this.car = null;
    this.displayDialog = false;
}



deleteRow() {
  let index = this.filterData.indexOf(this.selectedCar);
  this.filterData = this.filterData.filter((val, i) => i != index);
  this.car = null;
  this.displayDialog = false;
}


onRowSelect(event) {
  console.log("row sele",event);
    this.newCar = false;
    this.car = this.cloneCar(event.data);
    this.displayDialog = true;
}

cloneCar(c: Product): Product {
  let car = {};
  for (let prop in c) {
      car[prop] = c[prop];
  }
  return car;
}



}