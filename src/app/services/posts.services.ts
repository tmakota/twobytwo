import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/RX';

@Injectable()
export class PostService{
    public title =' mytitle';
    public result:String;
    constructor(private http: Http){
        console.log('PostService Initialized...');
    }

    getPosts(){
        return this.http.get('http://jsonplaceholder.typicode.com/posts')
            .map(res=>res.json());
    }
}