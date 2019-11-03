import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model';
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Car {
  vin;
  year;
  brand;
  color;
}


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})


export class EmployeeComponent implements OnInit {


  cols: any[];
  selectedColumns: any[];
  productRes: Product[];
  error:string = "";
 
  datasource: any=[];
  cardListnew:any=[];
  constructor(private prod:ProductService) { }

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
      this.cardListnew = this.datasource;
    //  this.totalRecords = this.datasource.length;
          // this.dataSource = res;
         // console.log(this.dataSource.data);
    },
      error =>{
        // this._serve.handleError(error);
        this.error = error;
            console.log('There was an error while retrieving Posts !!!' + error);  
      }
      );

      
    }
  
    searchItem(e){
      console.log("serach",e);
   
      var filter;
      var search = e.toLowerCase();
      if(!search || search == undefined || search == ''){
        return  this.cardListnew = this.datasource;
      }
      if(!this.datasource){
        return null
      }
      if(search){
       filter = this.cardListnew.filter((item)=>{
          return JSON.stringify(item).toLowerCase().includes(search)
        })
      }
      console.log("filtered array",filter);
      this.cardListnew = filter;
      //console.log("main array",this.cardList);
    }

 
    private getStudents() {
      return JSON.parse(`
      [
        {
            "StudentId": 1,
            "StudentName": "Student1",
            "Sex":"M",
            "Programs": [
                {
                    "StudentId": 1,
                    "ProgramName": "Java",
                    "ProgramCategory": "Engineering",
                    "ProgramStatus": "Full Time"
                },
                {
                    "StudentId": 1,
                    "ProgramName": "HR Management 2",
                    "ProgramCategory": "HR",
                    "ProgramStatus": "Part Time"
                },
                {
                    "StudentId": 1,
                    "ProgramName": "Accounting 1",
                    "ProgramCategory": "Finance",
                    "ProgramStatus": "Full Time"
                }
            ],
            "Courses": [
                {
                    "StudentId": 1,
                    "CourseName": "Java",
                    "CourseCategory": "Engineering",
                    "CourseStatus": "Full Time"
                },
                {
                    "StudentId": 1,
                    "CourseName": "HR Management 2",
                    "CourseCategory": "HR",
                    "CourseStatus": "Part Time"
                },
                {
                    "StudentId": 1,
                    "CourseName": "Accounting 1",
                    "CourseCategory": "Finance",
                    "CourseStatus": "Full Time"
                }
            ]
         },
        {
            "StudentId": 2,
            "StudentName": "Student2",
            "Sex":"F",
            "Programs": [
                {
                    "StudentId": 2,
                    "ProgramName": "HR Management 1",
                    "ProgramCategory": "HR",
                    "ProgramStatus": "Part Time"
                },
                {
                    "StudentId": 2,
                    "ProgramName": "Accounting 3",
                    "ProgramCategory": "Finance",
                    "ProgramStatus": "Full Time"
                }
            ],
            "Courses": [
                {
                    "StudentId": 2,
                    "CourseName": "HR Management 1",
                    "CourseCategory": "HR",
                    "CourseStatus": "Part Time"
                },
                {
                    "StudentId": 2,
                    "CourseName": "Accounting 3",
                    "CourseCategory": "Finance",
                    "CourseStatus": "Full Time"
                }
            ]
         },
        {
            "StudentId": 3,
            "StudentName": "Student3",
            "Sex":"F",
            "Programs": [
                {
                    "StudentId": 3,
                    "ProgramName": "Java 3",
                    "ProgramCategory": "Engineering",
                    "ProgramStatus": "Full Time"
                }
            ],
            "Courses": [
                {
                    "StudentId": 3,
                    "CourseName": "Java 3",
                    "CourseCategory": "Engineering",
                    "CourseStatus": "Full Time"
                }
            ]
         },
        {
            "StudentId": 4,
            "StudentName": "Student4",
            "Sex":"M",
            "Programs": [
                {
                    "StudentId": 4,
                    "ProgramName": "Java 2",
                    "ProgramCategory": "Engineering",
                    "ProgramStatus": "Full Time"
                },
                {
                    "StudentId": 4,
                    "ProgramName": "Accounting 2",
                    "ProgramCategory": "Finance",
                    "ProgramStatus": "Part Time"
                }
            ],
            "Courses": [
                {
                    "StudentId": 4,
                    "CourseName": "Java 2",
                    "CourseCategory": "Engineering",
                    "CourseStatus": "Full Time"
                },
                {
                    "StudentId": 4,
                    "CourseName": "Accounting 2",
                    "CourseCategory": "Finance",
                    "CourseStatus": "Part Time"
                }
            ]
         },
         {
            "StudentId": 5,
            "StudentName": "Student5",
            "Sex":"M",
            "Programs": [
                {
                    "StudentId": 5,
                    "ProgramName": "JavaScript",
                    "ProgramCategory": "Engineering",
                    "ProgramStatus": "Part Time"
                },
                {
                    "StudentId": 5,
                    "ProgramName": "HR Management 5",
                    "ProgramCategory": "HR",
                    "ProgramStatus": "Full Time"
                }
            ],
            "Courses": [
                {
                    "StudentId": 5,
                    "CourseName": "JavaScript",
                    "CourseCategory": "Engineering",
                    "CourseStatus": "Part Time"
                },
                {
                    "StudentId": 5,
                    "CourseName": "HR Management 5",
                    "CourseCategory": "HR",
                    "CourseStatus": "Full Time"
                }
            ]
         }
    ]

   `)}
}
