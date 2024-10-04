import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gato',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './gato.component.html',
  styleUrls: ['./gato.component.scss'],
  standalone: true,
})
export class GatoComponent  implements OnInit {

  httpClient = inject(HttpClient);
  data: any[] = [];
  data2: any[] = [];

  constructor() { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(){
    this.httpClient
    .get('https://cataas.com/cat?position=center&json=true')
    .subscribe((data: any)=>{
      console.log(data);
      this.data = data._id;
      this.data2 = data.tags;
    })
  }
}
