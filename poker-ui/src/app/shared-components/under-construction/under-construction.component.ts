import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent implements OnInit {

  message: string = 'Christmas 2022!';
  constructionDate: string[] = [];
  constructor() {}

  ngOnInit(): void {
      this.constructionDate = this.message.split('');
  }

}
