/* eslint-disable @typescript-eslint/no-explicit-any */
import { CallHandler, ExecutionContext, Injectable, NestInterceptor, BadRequestException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class MetadataInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    // Extract the username from headers, if available
    const username = this.extractUsername(request);
    // Ensure username exists
    if (!username) {
      throw new BadRequestException('Username header is missing');
    }
    // Mutate the request body before it is passed to the handler
    this.addMetadataToRequestBody(request, username);
    // Continue with the request processing
    return next.handle();
  }

  /**
   * Extracts the username from the request headers.
   * @param request The incoming HTTP request
   * @returns The username string if it exists
   */
  private extractUsername(request: any): string | null {
    return request.headers['x-username'] || request.headers['X-Username'] || null;
  }

  /**
   * Adds metadata such as createdBy or updatedBy to the request body based on the HTTP method.
   * @param request The incoming HTTP request
   * @param username The username extracted from the headers
   */
  private addMetadataToRequestBody(request: any, username: string): void {
    if (request.body && typeof request.body === 'object') {
      switch (request.method) {
        case 'POST':
          request.body['createdBy'] = username;
          request.body['updatedBy'] = username;
          break;
        case 'PATCH':
        case 'PUT':
          request.body['updatedBy'] = username;
          break;
        default:
          // Other HTTP methods, e.g., GET, DELETE, etc., do not modify the body
          break;
      }
    }
  }
}
