import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const username = request.user?.username;
    if (!username) {
      return next.handle();
    }

    if (request.method === 'POST') {
      request.body.createdBy = username;
      request.body.updatedBy = username;
    } else if (request.method === 'PUT' || request.method === 'PATCH') {
      request.body.updatedBy = username;
    }
    return next.handle();
  }
}
