import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
 import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'blog.db', // ملف SQLite هيتعمل في المشروع
      autoLoadEntities: true, // يجيب الـ Entities كلها أوتوماتيك
      synchronize: true, // يعمل Create/Update للجداول
    }),
    UsersModule, PostsModule],
  controllers: [AppController ],
  providers: [AppService] ,
})
export class AppModule {}
