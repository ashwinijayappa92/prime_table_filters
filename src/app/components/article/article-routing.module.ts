import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticalAddComponent} from './artical-add/artical-add.component';
import {ArticalDetailsComponent} from './artical-details/artical-details.component';
import {ArticalUpdateComponent} from './artical-update/artical-update.component';
import {ArticleComponent} from './article.component';
const articleRoutes: Routes = [
    {
        path: 'article',
        component: ArticleComponent
     },
     {
        path: 'add-book',
        component: ArticalAddComponent,
        outlet: 'bookPopup'
     },	
     {
        path: 'update-book/:book-id',
        component: ArticalUpdateComponent,
        outlet: 'bookPopup'
     },				
     {
        path: 'book-detail',
        component: ArticalDetailsComponent,
        outlet: 'bookList'
     },	
    
   {  path:'',
     pathMatch:'full',
     redirectTo:'article',
    }
]
@NgModule({
    imports:[RouterModule.forChild(articleRoutes)],
    exports:[RouterModule]
})
export class ArticleRoutingModule{}