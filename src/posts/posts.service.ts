import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {

    private posts = [
        {id:1,name:'post1'},
        {id:2,name:'post2'},
        {id:3,name:'post3'}
    ];

    findAll(){
        return this.posts ;
    }

    findOne(id){
        return this.posts.find(post => post.id===id);
    }

    create(name){
        var newPost =  this.posts.push({id:4,name:name});
        return this.findAll();
    }
    

    update(id ,name){
        var post = this.posts.find(post => post.id===id);
        if(post){
            post.name = name
        };
        return this.findAll();
    }

    remove(id){

        return {message:`delete success id ${id}`}
    }
}
