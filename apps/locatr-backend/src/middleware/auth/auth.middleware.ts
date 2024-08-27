import { Request, Response, NextFunction } from 'express';
import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/auth.service';
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}

  use = async (req: Request, _res: Response, next: NextFunction) => {
    // TODO: Implement token validation from the request header
    const authHeader = req.headers['x-authorisation'];
    if (authHeader && !req.user) {
      const token = Array.isArray(authHeader) ? authHeader[0] : authHeader;
      if (token) {
        try {
          const user = await this.authService.validateToken(token);
          if (user) req.user = user;
        } catch (err) {
          throw new UnauthorizedException((err as Error).message);
        }
      }
    }
    next();
  };
}
