import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../shared/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private service : ContactService) { }

  ngOnInit() {
  }

}
