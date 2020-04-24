import { Component, OnInit } from '@angular/core';
import{ActivatedRoute ,Router,Params} from '@angular/router';
import { BookServices } from '../book-services';
@Component({
  selector: 'app-artical-update',
  templateUrl: './artical-update.component.html',
  styleUrls: ['./artical-update.component.css']
})
export class ArticalUpdateComponent implements OnInit {

  constructor(private route:ActivatedRoute,private _serve:BookServices,private router:Router) { }

  ngOnInit() {
  }

  getBooks(){
    this.route.params.subscribe((param:Params)=>{
    if(param['book-id']){
       this._serve.getBookId(+param['book-id']);
      }
    })
  }

  update() {
    this.router.navigate([{ outlets: { bookPopup: null }}]);
 }

}
