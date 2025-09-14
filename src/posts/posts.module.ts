import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { PostsEntity } from "./posts.entity/posts.entity"
@Module({
    controllers:[PostsController], 
    providers:[PostsService], 
    exports:[PostsService],
    imports: [TypeOrmModule.forFeature([PostsEntity])], 
})
export class PostsModule {}
