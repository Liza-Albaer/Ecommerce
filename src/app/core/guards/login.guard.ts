import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../../pages/services/login/login.service';
import { isPlatformBrowser } from '@angular/common';


export const loginGuard: CanActivateFn = (route, state) => {
    const router:Router=inject(Router);
    const loginService : LoginService=inject(LoginService);
    const PLATFORM_iD=inject(PLATFORM_ID);
    if(!isPlatformBrowser(PLATFORM_iD)){
      return false;
     }
      try{
        const token=localStorage.getItem('token')!;

        if(token && loginService.getuserdata(token)){
          router.navigate(['/home']);
          return false;
        }
        else{

        return true;}

      }catch(error){

        return false;
      }


};
