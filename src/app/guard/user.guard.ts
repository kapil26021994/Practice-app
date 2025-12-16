import { CanActivateFn, CanDeactivateFn } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  if(state.url == '/dashboard'){
    return true;
  }else{
    return false;
  }
};