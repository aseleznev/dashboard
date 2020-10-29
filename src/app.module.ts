import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { WellModule } from './well/well.module';
import { LocationModule } from './location/location.module';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
const env = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: !env ? '.env' : `.env.${env}`
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mssql',
        host: configService.get('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.databaseName'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        dropSchema: false,
        logging: true
      })
    }),
    UserModule,
    WellModule,
    LocationModule,
    AuthModule,
    RoleModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor(private readonly configService: ConfigService) {
    console.log(configService.get('database.host'));
    console.log(configService.get<number>('database.port'));
  }
}
