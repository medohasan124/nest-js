import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UsersEntity } from "./users.entity/users.entity"
@Module({
    controllers:[UsersController], 
    providers:[UsersService], 
    exports:[UsersService],
    imports: [TypeOrmModule.forFeature([UsersEntity])], 
})
export class UsersModule {}
