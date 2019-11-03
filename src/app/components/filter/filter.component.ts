import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup} from '@angular/forms';

export interface FilterFormValue {
  sex: string;
  category: string;
  status: string;
}

export interface Program {
  studentId: number;
  programName: string;
  programCategory: string;
  programStatus: string;
}

export interface Student {
  studentId: number;
  studentName: string;
  sex: string;
  programs: Array<Program>;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filterForm:FormGroup;
  students:Array<Student> = [];
  filteredStudents :any = [];
  sexOptions: any = [];
  sexOptionsProg= [];
  sexOptionsCategory = [];
  sexOptionsCAT = [];
  programCategoryOptions: any = [];
  programStatusOptions:any = [];
  cols: any[];
  

  // sexOptions = ['M', 'F'];
  // programCategoryOptions = ['Engineering', 'HR', "Finance"];
  // programStatusOptions = ['Full Time', 'Part Time']

  // // add new array object options
  // courseCategoryOptions = ['Engineering', 'HR', "Finance"];
  // courseStatusOptions = ['Full Time', 'Part Time']
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.getAllStudents();
    this.cols = [
      { field: 'StudentId', header: 'Name' },
      { field: 'StudentName', header: 'SEX' },
      { field: 'sex', header: 'PROGRAM' },
     
     ];
  }

  private getAllStudents(){
    this.students = this.getStudents();
    // also setting filtered students to all of the students to display all of them at the start
    this.filteredStudents = this.students;
    this.getSexOptions();
    this.getProgramCategoryOptions();
    this.getProgramStatusOptions();
    this.intitForm();
  }

  private getSexOptions(){
    //am using array.from beacuase it will create shallow copy of the 
    //array so it will directly push the retrived values in array sexoption here
    this.sexOptions = Array.from(new Set(this.students.map((students:Student)=>{
    // console.log(students.Sex);
     if(students.sex){
       return {label:(students.sex).toUpperCase(),value:students.sex};
     }
   })));

    this.sexOptionsCAT = this.sexOptions.filter((thing,index) => {
     // console.log(index);
      return index ===this.sexOptions.findIndex(obj => {
        //console.log("obj",obj);
        return JSON.stringify(obj) === JSON.stringify(thing);
      });
    });
  let obj={};
  let a:string = "all"
   obj= {label:"all",value:"all"};
  // this.sexOptionsCAT.unshift(obj)
   console.log("obbj",this.sexOptionsCAT.unshift(obj));
    console.log("value",this.sexOptionsCAT);
    //console.log(this.sexOptions);
  }
  
  private getProgramStatusOptions(){
    const statusGroups = this.students.map((student: Student) => {
      //console.log(student)
      return student.programs.map((program: Program) => {
      return  {"label":program.programStatus,"value":program.programStatus}
      });
    });
     console.log("statusGroups",statusGroups);

     

    this.programStatusOptions = Array.from(new Set(statusGroups.reduce((a, b) => 
    {
      return a.concat(b)
    }
    )));

    console.log("programStatusOptions", this.programStatusOptions)
    this.sexOptionsProg = this.programStatusOptions.filter((thing,index) => {
     // console.log(index);
      return index ===this.programStatusOptions.findIndex(obj => {
       // console.log("obj",obj);
        return JSON.stringify(obj) === JSON.stringify(thing);
      });
    });
    var obj= {label:"all",value:"all"};
    this.sexOptionsProg.unshift(obj);
   // console.log("obbj",this.sexOptionsProg.unshift(obj));
    console.log("sexOptionsProg", this.sexOptionsProg)
    console.log("array of male f",this.sexOptionsProg);
  }

  private getProgramCategoryOptions(){
     // but suffice it to say that at the end we get all unique values for program categories
     const categoryGroups = this.students.map((student: Student) => {
      return student.programs.map((program: Program) => {
        return  {label:program.programCategory,value:program.programCategory}
      });
    });
    this.programCategoryOptions = Array.from(new Set(categoryGroups.reduce((a, b) => a.concat(b))));

    console.log("programCategoryOptions", this.programCategoryOptions)
    this.sexOptionsCategory = this.programCategoryOptions.filter((thing,index) => {
      console.log(index);
      return index ===this.programCategoryOptions.findIndex(obj => {
       // console.log("obj",obj);
        return JSON.stringify(obj) === JSON.stringify(thing);
      });
    });
    var obj= {label:'all',value:'all'};
    this.sexOptionsCategory.unshift(obj);
  //  console.log("obbj",this.sexOptionsCategory.unshift(obj));
    console.log("sexOptionsProg", this.sexOptionsCategory)
  }

 

 private intitForm(){
    this.filterForm = this.fb.group({
      sex: [''],
      category:[''],
      status:['']
    });
    this.watchFormChanges();
  }

  private watchFormChanges(){
    this.filterForm.valueChanges.subscribe((value:FilterFormValue)=>{
      console.log("vvv",value);
     this.filterStudents(value);
    })
  }

private filterStudents(value:FilterFormValue){
  console.log("filtered val",value);
  let filteredStudents:Array<Student> = this.students;
  console.log("filteredStudents 1",filteredStudents);

  if(value.sex =="all")return  this.filteredStudents=filteredStudents ;

  if(value.sex){
   filteredStudents = filteredStudents.filter((student:Student)=>{
     // console.log("student",student);
     return student.sex === value.sex;
    })
  }
  console.log("filteredStudents 2",filteredStudents);
  if(value.sex !== 'all'){
    if(value.status == 'all' || value.category == 'all'){
      return this.filteredStudents = filteredStudents;
    }
  }

  if(value.category && !value.status){
    filteredStudents = filteredStudents.filter((ele:Student)=>{
     return ele.programs.map((el:Program)=>{
       console.log(el);
      return el.programCategory.includes(value.category);

     })
    })
    console.log('filteredStudendtsby category',filteredStudents);
  }

  if(!value.category && value.status){
    filteredStudents = filteredStudents.filter((ele:Student)=>{
      return ele.programs.map((el:Program)=>{
        console.log(el);
       return el.programStatus.includes(value.status);
 
      });
     })
     console.log('filteredStudendtsby category',filteredStudents);
  };

  if (value.category && value.status) {
    //console.log("value.category && value.status",value.category , value.status);
   // when category and status is both set, filter for any student that has the status AND category in any of its programs
   filteredStudents = filteredStudents.filter((student: Student) => {
     return student.programs
       .filter((program: Program) => program.programCategory === value.category)
       .map((program: Program) => program.programStatus)
       .includes(value.status);
   });

    console.log("filtered last",filteredStudents);
 }
  
  this.filteredStudents = filteredStudents;
  
}

  
private getStudents() {
  return JSON.parse(`
  [
    {
        "StudentId": 1,
        "StudentName": "Student1",
        "sex":"M",
        "programs": [
            {
                "StudentId": 1,
                "ProgramName": "Java",
                "programCategory": "Engineering",
                "programStatus": "Full Time"
            },
            {
                "StudentId": 1,
                "ProgramName": "HR Management 2",
                "programCategory": "HR",
                "programStatus": "Part Time"
            },
            {
                "StudentId": 1,
                "ProgramName": "Accounting 1",
                "programCategory": "Finance",
                "programStatus": "Full Time"
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
        "sex":"F",
        "programs": [
            {
                "StudentId": 2,
                "ProgramName": "HR Management 1",
                "programCategory": "HR",
                "programStatus": "Part Time"
            },
            {
                "StudentId": 2,
                "ProgramName": "Accounting 3",
                "programCategory": "Finance",
                "programStatus": "Full Time"
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
        "sex":"F",
        "programs": [
            {
                "StudentId": 3,
                "ProgramName": "Java 3",
                "programCategory": "Engineering",
                "programStatus": "Full Time"
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
        "sex":"M",
        "programs": [
            {
                "StudentId": 4,
                "ProgramName": "Java 2",
                "programCategory": "Engineering",
                "programStatus": "Full Time"
            },
            {
                "StudentId": 4,
                "ProgramName": "Accounting 2",
                "programCategory": "Finance",
                "programStatus": "Part Time"
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
        "sex":"M",
        "programs": [
            {
                "StudentId": 5,
                "ProgramName": "JavaScript",
                "programCategory": "Engineering",
                "programStatus": "Part Time"
            },
            {
                "StudentId": 5,
                "ProgramName": "HR Management 5",
                "programCategory": "HR",
                "programStatus": "Full Time"
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
  `);
}


}
