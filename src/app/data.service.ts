import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Data } from "./data";
import { QData } from "./qdata";
import{ UsernameService} from "./username.service";
import { Observable } from "rxjs";


const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class DataService {
  dataUrl = "http://localhost:3000/users";
  qdataUrl = "http://localhost:3000/Questions";
 
  isLoggedIn = false;
  constructor(private http: HttpClient,private usernameservice:UsernameService) {}
  getData(): Observable<Data[]> {
  
    return this.http.get<Data[]>(this.dataUrl);
  }
  /**
   *
   *
   * @returns {Observable<QData[]>}
   * @memberof DataService
   */
  getusername(username){
    this.usernameservice.add(username)

  }
  getqData(): Observable<any> {
     
    return this.http.get<QData[]>(this.qdataUrl);
  }


  sample(){
    this.getqData().subscribe(function(){},function(){},function(){});
  }
  /**
   *rege
   *
   * @param {number} id
   * @returns {Observable<QData>}
   * @memberof DataService
   */
  getqData1(id: number): Observable<QData> {
    const url = `${this.qdataUrl}/${id}`;
    return this.http.get<QData>(url);
  }

  

  addQuestion(qdata: QData): Observable<QData> {
    return this.http.post<QData>(this.qdataUrl, qdata, httpOptions);
  }
  addUserData(data: Data): Observable<Data> {
   
    return this.http.post<Data>(this.dataUrl, data, httpOptions);
  }
  pushqData(qdata: QData): Observable<QData> {
    const url = `${this.qdataUrl}/${qdata.id}`
    return this.http.put<QData>(url, qdata, httpOptions);
  }
  addview(qdata: QData): Observable<QData>{
    const url = `${this.qdataUrl}/${qdata.id}`
    return this.http.patch<QData>(url, qdata, httpOptions);
  }

  setLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }
}
