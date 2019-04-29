import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-likes-count',
  templateUrl: './likes-count.component.html',
  styleUrls: ['./likes-count.component.css']
})
export class LikesCountComponent implements OnInit {

  @Input("likescount") likescount:number;
  @Input() Isactive:boolean;



//tweet={body:"---",likescount:10,isActive:true}

  onclick()
  {

this.likescount+=this.Isactive?+1:-1;
this.Isactive=!this.Isactive;

  }

  constructor() { }

  ngOnInit() {
  }

}
