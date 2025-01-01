import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationConfiguration } from '../app.config';
import { UserModel } from '../app_controllers/models.controller';

@Injectable({ providedIn: 'root'})
export class UserService {

  private _url =ApplicationConfiguration.Get().ApiServiceLink + 'User';
  constructor(private http: HttpClient) { }


  SaveUserRecord(userModel: UserModel) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/InsertRecord", userModel, {
      headers
    })
  }

}
