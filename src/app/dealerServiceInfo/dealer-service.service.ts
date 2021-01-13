import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DealerServiceInfoModelDTO, UserEmailInfoInputValueDTO } from '../models/dealerServiceInfoModel';

@Injectable({
  providedIn: 'root'
})
export class DealerServiceService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'GetUserEmailInfo?email=';
  
  email: string = '';

  public getAll(inputData: any): Observable<any>{
    return this.http.get<DealerServiceInfoModelDTO[]>(this.apiURL + inputData.Email.email, {observe: 'response'});
  }

  // public getAll(email: UserEmailInfoInputValueDTO, page: number, recordsToShowQty: number): Observable<any>{
  //   let params = new HttpParams();
  //   params = params.append('page', page.toString());
  //   params = params.append('recordsPerPage', recordsToShowQty.toString());
  //   return this.http.get<DealerServiceInfoModelDTO[]>(this.apiURL+email, {observe: 'response', params});
  // }

}
