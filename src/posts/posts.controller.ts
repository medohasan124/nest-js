import { Controller ,Get,Post,Param,Delete,Put,Body} from '@nestjs/common';
import { PostsService } from './posts.service';
@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}
    @Get()
    findAll(){
        return this.postsService.findAll();
    }
    @Get(":id")
    findOne(@Param('id') id){
        return this.postsService.findOne(+id);
    }

    @Post()
    create(@Body('name') name){
        return this.postsService.create(name);
    }

    @Put(":id")
    update(@Param("id") id , @Body('name') name){
        return this.postsService.update(+id,name);
    }

    @Delete(":id")
    remove(@Param("id") id){
        return this.postsService.remove(+id);
    }
}
