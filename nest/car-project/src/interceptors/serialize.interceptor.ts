import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { plainToClass } from 'class-transformer';

//vor dto menak poxanchen string, number tench baner chlini
interface ClassConstructor {
  new (...args: any[]): {};
}

export function Serialize(dto: ClassConstructor) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

//vor dashtery vor uzenanq et dashtery tanq
export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    //  Run something before a request is handled
    //  by the request handler
    // console.log(context.switchToHttp().getRequest(), 'context');
    return next.handle().pipe(
      map((data: any) => {
        //  Run something before the request is sent out
        return plainToClass(
          this.dto,
          data,
          {
            excludeExtraneousValues: true,
          },
        );
      }),
    );
  }
}
