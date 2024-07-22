import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'YOUR_SECRET_KEY', // Use an environment variable for the secret key
    });
  }

  async validate(payload: any) {
    const user = await this.userService.findOneBy(payload.username);
    if (!user) {
      throw new UnauthorizedException("User not found");
    }
    // return { userId: payload.sub, username: payload.username };
    return user;
  }
}
