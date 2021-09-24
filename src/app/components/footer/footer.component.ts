import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  anio: number = new Date().getFullYear();
  mes:number = new Date().getMonth() + 1;
  dia:number= new Date().getDay();
  constructor() { }

  ngOnInit(): void {

  }

}
