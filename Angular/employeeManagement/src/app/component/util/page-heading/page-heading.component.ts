import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-heading',
  templateUrl: './page-heading.component.html',
  styleUrls: ['./page-heading.component.css']
})
export class PageHeadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() heading: string = "";

}
