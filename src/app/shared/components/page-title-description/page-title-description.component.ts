import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-title-description',
  templateUrl: './page-title-description.component.html',
  styleUrls: ['./page-title-description.component.scss']
})
export class PageTitleDescriptionComponent implements OnInit {

  @Input() title: any;

  @Input() description: any;
  
  constructor() { }

  ngOnInit() {
  }

}
