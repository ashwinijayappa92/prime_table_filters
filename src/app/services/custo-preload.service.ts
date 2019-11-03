

import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
 import { Observable } from 'rxjs';
 //import 'rxjs/add/observable/of';
//import { of } from 'rxjs/observable/of';
import { of } from 'rxjs';


@Injectable()
export class CustoPreloadService implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      console.log('Preload Path: ' + route.path);
      return load();
    } else {
      return of(null);
    }
  }
}