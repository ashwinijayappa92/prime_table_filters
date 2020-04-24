import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule,FormsModule }    from '@angular/forms';
import {ArticalAddComponent} from './artical-add/artical-add.component';
import {ArticalDetailsComponent} from './artical-details/artical-details.component';
import {ArticalUpdateComponent} from './artical-update/artical-update.component';
import {ArticleComponent} from './article.component';
import {ArticleRoutingModule} from './article-routing.module';
import { BookServices } from './book-services';
@NgModule({
  imports: [     
        CommonModule,
    ReactiveFormsModule,
    FormsModule,
		ArticleRoutingModule
  ], 
  declarations: [ArticalDetailsComponent,
    ArticalAddComponent,
    ArticalUpdateComponent,
    ArticleComponent
  ],
  providers: [BookServices ]
})
export class ArticleModule { }
