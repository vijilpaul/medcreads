import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  honeData;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getHomeData().subscribe(data => {
      this.honeData = data[0].home;
    })
  }

}
