import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
export class HttpAuthentication implements HttpInterceptor{
intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>
{
    alert("InterCepting....:::))))")
    const authReq=req.clone({
        setHeaders:{Autherization: 'Bearer demo'}
    })
    return next.handle(req);
}

} 