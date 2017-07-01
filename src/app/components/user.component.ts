import {Component} from '@angular/core';
import {PostService} from '../services/posts.services';

@Component({
    moduleId: module.id, // <= this must be here to use templateURL
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostService]
})

export class UserComponent
{
    tempResult:String;
    name: string;
    email: string;
    address: IAddress;
    posts:Post[];
    
    constructor(private postService: PostService)
    {
        this.name ='John Does';
        this.email ='john@email.com';
        this.address = {
            street : 'Elm Street',
            city: 'Manila',
            state: 'NY'
        }
        this.postService.getPosts().subscribe(
                data => this.posts = data,
                err => console.log('ERROR!!!'),
                () => console.log('Got response from API', this.posts)
        );
    }
}
interface IAddress {
    street : string,
    city: string,
    state: string
}
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }