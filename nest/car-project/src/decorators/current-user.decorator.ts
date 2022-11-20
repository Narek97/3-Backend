import { createParamDecorator, ExecutionContext } from '@nestjs/common';

//gtnuma login exat userin u veradardnum vor requesti mej uzenq karanq tvyal uzerin stananq
export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return request.currentUser;
  },
);
