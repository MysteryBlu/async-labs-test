import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class BaseApiInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const url = 'https://private-anon-a6c27e284d-technicaltaskapi.apiary-mock.com';
    req = req.clone({
      url: url + req.url
    });
    return next.handle(req);
  }
}
