import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  myForm: FormGroup;
  date:any;
  constructor(private fb: FormBuilder) { 
    this.myForm = this.fb.group({
      fecha: ['', []],
      categoria: ['', []]
    });
  }

  ngOnInit(): void {
    this.date = new Date;
  }
}