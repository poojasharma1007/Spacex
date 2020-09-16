import { SpacedataService } from './../core/spacedata.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  viewdata: any;
  username: string = 'Pooja Sharma';
  viewdatadashboard: any;
  imgdata: any;
  year=['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'];
  trueorfalse=['true','false']
  constructor(private http: HttpClient,private spacedata:SpacedataService) {
    // this.getViewData();
    // this.pagedata();
  }
  ngOnInit(): void {
   // this.pagedata();
   this.getViewData();
  }
  getViewData() {
    this.spacedata.getdashboardData().subscribe(response => {
      this.viewdata = response;
      
    });
  }
 
  getLaunchData(launchyear) {
    this.spacedata.getyearData(launchyear.innerHTML).subscribe(data => {
      this.viewdata = data;
    })
  }
  getLaunchSuccessData(sucessdata) {
    this.spacedata.getlaunchData(sucessdata.innerHTML).subscribe(data => {
      this.viewdata = data;
    })
  }
  landingStatus(landing) {
    this.spacedata.getlandhData(landing.innerHTML).subscribe(data => {
      this.viewdata = data;
      //JSON.getJSONObject("this.viewdata").getString("land_success");
    })
  }

}    
