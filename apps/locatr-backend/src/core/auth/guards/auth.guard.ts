import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers.authorization; // Bearer token
    const token = authorization?.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.jwtService.verifyAsync(token);
      request.user = {
        userId: payload.sub,
        username: payload.username,
      }
      return true;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  // async canActivate(context: ExecutionContext): Promise<boolean> {
  //   const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
  //     context.getHandler(),
  //     context.getClass(),
  //   ]);
  //   if (isPublic) {
  //     return true;
  //   }

  //   const request = context.switchToHttp().getRequest();
  //   const token = this.extractTokenFromHeader(request);

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     const payload = await this.jwtService.verifyAsync(token, {
  //       secret: process.env.JWT_SECRET,
  //     });
  //     request.user = payload;
  //     return true;
  //   } catch (error) {
  //     throw new UnauthorizedException();
  //   }
  // }

  // private extractTokenFromHeader(request: Request): string | undefined {
  //   const [type, token] = (request.headers as unknown as IncomingHttpHeaders).authorization?.split(' ') ?? [];
  //   return type === 'Bearer' ? token : undefined;
  // }
}
