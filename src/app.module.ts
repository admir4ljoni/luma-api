import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { UserAuthController } from './user-auth/user-auth.controller';
import { UserAuthController } from './user-auth/user-auth.controller';
import { UserController } from './auth/user/user.controller';
import { UserAuthController } from './user.auth/user.auth.controller';
import { RoleModule } from './role/role.module';
import { UserController } from './auth/user/user.controller';
import { UserAuthController } from './user.auth/user.auth.controller';
import { UserAuthController } from './user-auth/user-auth.controller';
import * as process from 'node:process';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/public',
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadModels: true,
      synchronize: false,
      models: [],
    }),
    UserModule,
    RoleModule,
  ],
  controllers: [AppController, UserAuthController, UserController],
  providers: [AppService],
})
export class AppModule {}
