import { Controller ,Get,Post,Param,Delete,Put} from '@nestjs/common';

@Controller('posts')
export class PostsController {

    @Get()
    findAll(){
        return ['post1' , 'post2' , 'post3'];
    }

    @Get(":id")
    findOne(@Param("id") id:string){
        return {message: `id is -> ${id}`}
    }

    @Put(":id")
    update(@Param("id") id:string){
        return {message: `update Post -> ${id}`}
    }

    @Post()
    create(){
        return {message :"created Success"}
    }

    @Delete(":id")
    remove(@Param('id') id:string){
        return {message: `id is deleted-> ${id}`}
    }
}
