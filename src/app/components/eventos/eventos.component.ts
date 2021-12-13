import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  myForm: FormGroup;
  date:any;
  constructor(private fb: FormBuilder) { 
    this.myForm = this.fb.group({
      fecha: ['', []],
      insteres: ['', []],
      localidad: ['', []]
    });
  }

  ngOnInit(): void {
    this.date = new Date;
  }
}
