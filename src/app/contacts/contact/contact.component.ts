import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../shared/contact.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private service: ContactService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      id: null,
      nome: '',
      telefone: '',
      email: ''
    };
  }

  onSubmit(form: NgForm) {
    if (form.value.id == null) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    // this.service.postEmployee(form.value).subscribe(res => {
    //   this.toastr.success('Inserted successfully', 'EMP. Register');
    //   this.resetForm(form);
    //   this.service.refreshList();
    // });
  }

  updateRecord(form: NgForm) {
    // this.service.putEmployee(form.value).subscribe(res => {
    //   this.toastr.info('Updated successfully', 'EMP. Register');
    //   this.resetForm(form);
    //   this.service.refreshList();
    // });

  }
}
