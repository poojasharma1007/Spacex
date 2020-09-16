import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpacedataService {

  constructor(private http: HttpClient) { }
  public getdashboardData():Observable<any>{
    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100').pipe(map(data => {
                return data;
            }))
  }

  public getyearData(launchyear):Observable<any>{
    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100&launch_year='+launchyear).pipe(map(data => {
                return data;
            }))
  }
  public getlaunchData(launchsucces):Observable<any>{
    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100&launch_success='+launchsucces).pipe(map(data => {
                return data;
            }))
  }
  public getlandhData(landdata):Observable<any>{
    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100&land_success='+landdata).pipe(map(data => {
                return data;
            }))
  }
}
