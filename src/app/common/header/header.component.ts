import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerData;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getHeaderData().subscribe(data => {
      this.headerData = data;
    })
  }

}
