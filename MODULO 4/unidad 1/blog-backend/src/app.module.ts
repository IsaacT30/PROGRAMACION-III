import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';  // Importar Mongoose
import { TypeOrmModule } from '@nestjs/typeorm';  // Importar TypeOrm
import { ConfigModule } from '@nestjs/config';  // Importar ConfigModule
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
/*import { CustomersModule } from './customers/customers.module';*/
/*import { InvoicesModule } from './invoices/invoices.module';*/
import { CursosModule } from './cursos/cursos.module';

// filepath: c:\Users\USUARIO\Tienda-NBA-backend\src\app.module.ts
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI || ''),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT as unknown as number,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      ssl: { rejectUnauthorized: false },
    }),
    UsersModule,
    CategoriesModule,
    PostsModule,
    AuthModule,
    MailModule,
    CursosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}