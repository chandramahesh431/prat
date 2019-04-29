import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostsService } from '../services/posts.service';
import { appError } from '../common/appError';
import { Error404 } from '../common/Error404';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:any=[];
  constructor(private postService:PostsService)
   { 

   

   }

   createPost(input:HTMLInputElement)
      {
        let post={title:input.value};
        input.value='';
        this.postService.create(input)
        .subscribe((response=>{

        post['id']=response.json().id;
        this.posts.splice(0,0,post);

        console.log(response.json());}),(error:Response)=>{
          if(error.status===400)
          {
//bad request
          }
          else
          {
            alert("Generic Error message");
         console.log("error message:",error);
          }
                  

        });

      }

      updatePost(post)
      {
        this.postService.update(post)
.subscribe(response=>{

  console.log(response.json());
},(error:Response)=>{

  alert("Generic Error message");
  console.log("error message:",error);
});

      }

      deletePost(post)
      {
        this.postService.delete(post.id)
.subscribe(response=>{

  console.log(response.json());
let index=this.posts.indexOf(post);
this.posts.splice(index,1);
alert("The Post has deleted...");

}
// ,(error:appError)=>{
 
// if(error instanceof Error404)
// {
// alert("The post already been deleted...");
// }
// else 
// throw error;//throwing error to  global error handling class

  
// }
);

      }

  ngOnInit() {
    this.postService.getAll()
    .subscribe(response=>{ this.posts=response.json();},(error:appError)=>{    
      alert("Generic Error message");
      console.log("error message:",error);
    });
  }

}
