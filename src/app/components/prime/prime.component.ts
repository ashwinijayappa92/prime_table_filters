import { Component, OnInit } from '@angular/core';
import {Product} from '../../model';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent implements OnInit {

  displayDialog: boolean;

  car: Product = {};
  //productRes: Product[];
  error:string = "";
 
  datasource: any=[];

  selectedCar: Product;

  newCar: boolean;

  //cars: Product[];
  yearFilter: number;

  yearTimeout: any;
  cols: any[];
  brands: any[];companies: any[];
//dropdown

respCar: any = 'Audi';

selectedCars1: string[] = [];

selectedCars2: string[] = ['Audi', 'BMW'];

  rowGroupMetadata: any;
  constructor(private prod:ProductService,) { }

  ngOnInit() {
     // this.carService.getCarsSmall().then(cars => this.cars = cars);
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
 // this.selectedColumns = this.cols;

 this.brands = [
  { label: 'All Brands', value: null },
  { label: 'Audi', value: 'Audi' },
  { label: 'BMW', value: 'BMW' },
  { label: 'Fiat', value: 'Fiat' },
  { label: 'Honda', value: 'Honda' },
  { label: 'Jaguar', value: 'Jaguar' },
  { label: 'Mercedes', value: 'Mercedes' },
  { label: 'Renault', value: 'Renault' },
  { label: 'VW', value: 'VW' },
  { label: 'Volvo', value: 'Volvo' }
];

this.companies = [
  { label: 'zolo', value: 'zolo' },
  { label: 'Genfact', value: 'genfact' },
  { label: 'Wipro', value: 'wipro' },
  { label: 'ITC', value: 'ITC' },
  { label: 'reddit', value: 'reddit' },
  { label: 'DDD', value: 'ddd' },
  { label: 'Bhu', value: 'Bhu' },
  { label: 'Hp', value: 'hp' },
  { label: 'infosys', value: 'infosys' }
];

  }

  showDialogToAdd() {
      this.newCar = true;
      this.car = {};
      this.displayDialog = true;
  }


  getProducts(){
    // var req={
    //    "page": 1,
    //     "limit": 20,
    // }
   
    this.prod.getProducts().subscribe((res:any)=>{
      console.log("prod res",res);
      console.log("prod res",res.length);
      console.log("prod res",typeof(res));
      this.datasource =res;
      this.updateRowGroupMetaData();
      //this.totalRecords = this.datasource.length;
          // this.dataSource = res;
         // console.log(this.dataSource.data);
    },
      error =>{
       //  this._serve.handleError(error);
        this.error = error;
            console.log('There was an error while retrieving Posts !!!' + error);  
      }
      )
    }
  

  
  save() {
      let cars = [... this.datasource];
      if (this.newCar)
          cars.push(this.car);
      else
          cars[ this.datasource.indexOf(this.selectedCar)] = this.car;

      this.datasource = cars;
      this.car = null;
      this.displayDialog = false;
  }

  

  deleteRow() {
    let index = this.datasource.indexOf(this.selectedCar);
    this.datasource = this.datasource.filter((val, i) => i != index);
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

  
  onYearChange(event, dt) {
    if (this.yearTimeout) {
        clearTimeout(this.yearTimeout);
    }

    this.yearTimeout = setTimeout(() => {
        dt.filter(event.value, 'year', 'gt');
    }, 250);
  }


  onSort() {
    this.updateRowGroupMetaData();
}

updateRowGroupMetaData() {
    this.rowGroupMetadata = {};
    if (this.datasource) {
        for (let i = 0; i < this.datasource.length; i++) {
            let rowData = this.datasource[i];
            let brand = rowData.brand;
            if (i == 0) {
                this.rowGroupMetadata[brand] = { index: 0, size: 1 };
            }
            else {
                let previousRowData = this.datasource[i - 1];
                let previousRowGroup = previousRowData.brand;
                if (brand === previousRowGroup)
                    this.rowGroupMetadata[brand].size++;
                else
                    this.rowGroupMetadata[brand] = { index: i, size: 1 };
            }
        }
    }
}

respToggle(car) {
  console.log("acar",car)
  this.respCar = car.label;
}

checkIfResp(event) {
  console.log("dropdown e,",event);
  var respCarIndex = (this.respCar) ? this.selectedCars2.findIndex(x => x === this.respCar) : 0;
  console.log("respCarIndex",respCarIndex)
  if (respCarIndex === -1) {
    this.selectedCars2.push(this.respCar);
     }
  }

}
