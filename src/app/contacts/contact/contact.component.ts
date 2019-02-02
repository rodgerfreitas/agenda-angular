import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../shared/contact.service';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private service: ContactService,
              private toastr: ToastrService) {}
  ngOnInit() {
    this.resetForm();
  }
  resetErrors () {
    this.service.errorList = [];
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
    this.service.postContact(form.value).subscribe( (res: any) => {
      if (res.status === 'OK' ) {
        this.toastr.success('Registro inserido com sucesso', 'Agenda');
        this.resetErrors();
        this.resetForm(form);
      } else {
        this.service.errorList = res.errors;
        this.toastr.error('Formulário preenchido incorretamente', 'Agenda');
        console.log(res.errors);
      }
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putContact(form.value).subscribe((res: any) => {
      if (res.status === 'OK' ) {
        this.toastr.info('Registro atualizado com sucesso', 'Agenda');
        this.resetErrors();
        this.resetForm(form);
      } else {
        this.service.errorList = res.errors;
        this.toastr.error('Formulário preenchido incorretamente', 'Agenda');
        console.log(res.errors);
      }
      this.service.refreshList();
    });
  }
}
