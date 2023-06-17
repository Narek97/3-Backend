// import {
//   CallHandler,
//   ExecutionContext,
//   Injectable,
//   NestInterceptor,
// } from '@nestjs/common';
// import { UsersService } from '../users/users.service';
//
// //login exat userin gtnelu hamar, petqa vortex vor uzum enq gtnenq ira modulnerim kanchenq
// //@UseGuards(AuthGuard) sra heta ogtagortvum
// @Injectable()
// export class CurrentUserInterceptor implements NestInterceptor {
//   constructor(private userService: UsersService) {}
//
//   async intercept(context: ExecutionContext, handler: CallHandler) {
//     const request = context.switchToHttp().getRequest();
//     const { userId } = request.session || {};
//     if (userId) {
//       const user = await this.userService.findOne(userId);
//       request.currentUser = user;
//     }
//
//     return handler.handle();
//   }
// }
