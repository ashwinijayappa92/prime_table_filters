import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {map,catchError,} from 'rxjs/operators';
import {Product} from '../model';
//const url = 'http://134.209.147.129:3001';
//let apiUrl = './assets/data.json';


// export interface  products{
//    id: number,
//    name:string,
//    mrp:number,
//    unit:string,
//    quantity:number,
//    category:string,
//    company:string,
//    barnd:string,
//    subcategory:string
// } 

@Injectable({
providedIn:'root'
})
export class ProductService {
token:any;
private _url:string="http://localhost:4200/assets/data.json";
  constructor(private http:HttpClient) { 
    
  }

private extractData(res:Response){
  let body= res;
  return body || {}
}

  

getProducts():Observable<any>{
  let httpOptions={
    headers: new HttpHeaders({
      "Content-Type":"application-json",
     // "Authorization":this.token

    })
  }

  return this.http.get(this._url,httpOptions).pipe(map(this.extractData),catchError(this.handleError<any>('getProducts')))
}


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }



///second way of doinf services with erro handleError
//like dis way also we can do
  public GetAllRecords() {  
    return this.http.get(this._url + 'posts')  
    .pipe(map((res: Response) => {  
        return res.json();  
      }), catchError(this.handledError)  )
   
  }

 private handledError(error: Response | any) {  
    console.error(error.message || error);  
    return Observable.throw(error.status);  
  }

}