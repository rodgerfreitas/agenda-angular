import { Injectable } from '@angular/core';
import {Contact} from './contact.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  formData: Contact;
  list: Contact[];
  readonly rootURL = 'http://agenda.local/rest';

  constructor(private http: HttpClient) { }

  postContact(formData: Contact) {
    return this.http.post(this.rootURL + '/insert', formData);
  }

  refreshList() {
    this.http.get(this.rootURL + '/list')
        .toPromise().then(res => this.list = res as Contact[]);
  }

  putContact(formData: Contact) {
    return this.http.put(this.rootURL + '/update/' + formData.id, formData);
  }

  deleteContac(id: number) {
    return this.http.delete(this.rootURL + '/delete/' + id);
  }
}
