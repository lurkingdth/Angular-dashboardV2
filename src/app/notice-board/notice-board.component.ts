import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/my-data.service';


@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.css']
})
export class NoticeBoardComponent implements OnInit {
  myData$!:any;
  
  constructor(private myDataService: MyDataService) { }

  ngOnInit(): void {
    this.myData$ = this.myDataService.getData();
  }

}
