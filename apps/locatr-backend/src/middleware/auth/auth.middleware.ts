import { Request, Response, NextFunction } from 'express';
import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';

import { AuthService } from '../../modules';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}

  use = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['x-authorisation'];
    const token = Array.isArray(authHeader) ? authHeader[0] : authHeader;

    if (token) {
      try {
        const user = await this.authService.validateToken(token);
        if (user) {
          req.user = user;
        }
      } catch (err) {
        console.error('Invalid token:', err.message);
        throw new UnauthorizedException(err.message);
      }
    } else {
      console.warn('X-Authorization token not found');
      throw new UnauthorizedException('Authorization token not found');
    }

    next();
  };
}
