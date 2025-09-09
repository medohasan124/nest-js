import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        {id:1,name:'mohamed'},
        {id:2,name:'ahmed'},
        {id:3,name:'saeed'}
    ];

    findAll(){
        return this.users ;
    }

    findOne(id){
        return this.users.find(user => user.id===id);
    }

    create(name){
        var newUser =  this.users.push({id:4,name:name});
        return this.findAll();
    }
    

    update(id ,name){
        var user = this.users.find(user => user.id===id);
        if(user){
            user.name = name
        };
        return this.findAll();
    }

    remove(id){

        return {message:`delete success id ${id}`}
    }


}
