import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ip-adress',
  templateUrl: './ip-adress.component.html',
  styleUrls: ['./ip-adress.component.css']
})
export class IpAdressComponent implements OnInit {

  ipAddress = '';
  
  constructor(private http:HttpClient) { }
  
  ngOnInit() {
      this.getIPAddress();
  }
  
  getIPAddress()
  {
    this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
      this.ipAddress = res.ip;
    });
  }
}
