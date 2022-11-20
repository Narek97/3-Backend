import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

//stuguma usery admina te che
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    if (!request.currentUser) {
      return false;
    }
    return !!request.currentUser.admin;
  }
}
