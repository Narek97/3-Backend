import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    try {
      const authHeader = req.headers.authorization;

      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];
      const decodedUser = await this.jwtService.verify(token);
      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({ message: 'Unauthorized' });
      }
      if (decodedUser?.id) {
        const user = await this.userRepository.findOne({
          where: { id: decodedUser.id },
        });
        if (user) {
          req.user = user;
        } else {
          throw new UnauthorizedException('Unauthorized');
        }
      } else {
        throw new UnauthorizedException('Unauthorized');
      }
      return true;
    } catch (e) {
      throw new UnauthorizedException({ message: 'Unauthorized' });
    }
  }
}
