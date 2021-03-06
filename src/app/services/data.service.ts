import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';


@Injectable()
export class DataService {

  private urlElenco = environment.apiurl;
  public content: any[] = [];

  constructor(
    private http: HttpClient
  ) {}

  public getContents(parameters: any = {}):  Observable<any> {
    return this.http.post<any>(`${this.urlElenco}contents`, parameters);
  }

  public getContent(id: number = null):  Observable<any> {
    return this.http.get(`${this.urlElenco}content/${id}`);
  }

  public getBoxes(parameters: any = {}):  Observable<any> {
    return this.http.post<any>(`${this.urlElenco}boxes`, parameters);
  }

  public getBoxContents(parameters: any = {}):  Observable<any> {
    return this.http.post<any>(`${this.urlElenco}box`, parameters);
  }

  public getCategories():  Observable<any> {
    return this.http.get(`${this.urlElenco}categories`);
  }

  public getSubCategories(id: number = null):  Observable<any> {
    return this.http.get(`${this.urlElenco}subcategories/${id}`);
  }





  // public getImmobili(parameters: any = {}):  Observable<any> {
  //   const params = Obj.toUrlParams(parameters);
  //
  //   return this.http.get(`${this.urlElenco}?${params}`);
  // }
  //
  // public getDettaglio(seoUrl: string):  Observable<any> {
  //   const url = `${this.urlElenco}?seo_url=${seoUrl}`;
  //   // console.log('url', url);
  //   return this.http.get(url);
  // }
  //
  // public getPropertySegment(key: string, value: string):  Observable<any> {
  //   // console.log('property-segment', key, value);
  //   return this.http.get(`${this.urlElenco}?${key}=${value}`);
  // }
  //
  // public getPage(seoUrl: string):  Observable<any> {
  //   const url = `${this.urlPages}?seo_url=${seoUrl}`;
  //
  //   return this.http.get(url);
  // }

}
