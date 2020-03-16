import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sports } from './sports';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  
  private sportUrl = 'assets/sport.json';

  constructor(private http:HttpClient) { }

  getSports():Observable<Sports[]>
  {
    return this.http.get<Sports[]>(this.sportUrl);
  }
}
