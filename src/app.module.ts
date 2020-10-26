import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PanelModule } from './panel/panel.module';
import { WellModule } from './well/well.module';
import { DdrModule } from './ddr/ddr.module';
import { ComponentModule } from './component/component.module';
import { LocationModule } from './location/location.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        schema: 'public',
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
    DashboardModule,
    PanelModule,
    WellModule,
    DdrModule,
    ComponentModule,
    LocationModule,
    AuthModule
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
