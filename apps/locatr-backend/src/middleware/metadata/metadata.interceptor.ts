import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class MetadataInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const userId = request.user?.id; 

    return next.handle()
      .pipe(map((data) => {
        if (data && typeof data === 'object') {
          if (request.method === 'POST') {
            data.createdBy = userId;
          }
          if (request.method === 'PATCH' || request.method === 'PUT') {
            data.updatedBy = userId;
          }
        }
        return data;
      }),
    );
  }
}
