import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastservice=inject(ToastrService);
  return next(req).pipe(catchError((err)=>{
    console.log(err)
    toastservice.error(err.error.message,'Error')
    return throwError(()=>err);
  }));
};
