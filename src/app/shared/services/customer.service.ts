import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) {}
  public url = "https://jsonplaceholder.typicode.com/posts";

  get() {
    return this.http.get(this.url);
  }
  getByID(id) {
    return this.http.get(this.url + "/" + id);
  }
  post(obj) {
    return this.http.post(this.url, obj);
  }
  delete(id) {
    return this.http.delete(this.url + "/" + id);
  }
  update(obj, id) {
    return this.http.put(this.url + "/" + id, obj);
  }
}
