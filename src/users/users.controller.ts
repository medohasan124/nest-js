import { Controller ,Get,Post,Put,Delete,Param,Body } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get()
    findAll(){
        return this.usersService.findAll();
    }
    @Get(":id")
    findOne(@Param('id') id){
        return this.usersService.findOne(+id);
    }

    @Post()
    create(@Body('name') name){
        return this.usersService.create(name);
    }

    @Put(":id")
    update(@Param("id") id , @Body('name') name){
        return this.usersService.update(+id,name);
    }

    @Delete(":id")
    remove(@Param("id") id){
        return this.usersService.remove(+id);
    }
}
