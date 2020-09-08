import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, EMPTY, of } from 'rxjs';

type fn = () => Observable<any>;

@Injectable({
  providedIn: 'root'
})
export class PreloadService implements PreloadingStrategy {
  preload(route: Route, load: fn): Observable<any> {
    return route.data?.preload ? load() : EMPTY;
    // if (route.data && route.data['prelaod']) {
    //   return load();
    // } else {
    //   return EMPTY;
    // }
  }
}
