import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    JwtModule.register({
      secret: process.env.JWT_KEY || 'SECRET',
      signOptions: {
        expiresIn: '24h',
      },
    }),
    forwardRef(() => UsersModule),
    // forwardRef ete orinak modul A ogtagortvuma modul B-um u B modul A-um anverj cikla darnum sech piti anenq vor chlini
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
