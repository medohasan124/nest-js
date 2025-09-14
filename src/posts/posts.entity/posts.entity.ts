import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PostsEntity {

    @PrimaryGeneratedColumn()
    id:string ;

    @Column()
    name:string ;

    @Column()
    post:string;
    

   
}
