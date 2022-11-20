import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { User } from '../users/user.entity';

export interface ExpressRequestInterface extends Request {
  user?: User;
}

//gtnuma login exat userin tokeni mijochov u veradardnum vor requesti mej uzenq karanq tvyal uzerin stananq
export const AuthUser = createParamDecorator((data: any, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<ExpressRequestInterface>();
  return data ? request.user?.[data] : request.user;

  // if (!request.user) {
  //   return null;
  // }
  //
  // if (data) {
  //   return request.user[data];
  // }
  //
  // return request.user;
});
