import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent implements OnInit {
  myForm: FormGroup;
  date:any;
  constructor(private fb: FormBuilder) { 
    this.myForm = this.fb.group({
      sector: ['', []],
      insteres: ['', []],
      fundada: ['', []],
      numEmpleados: ['', []],
      otros: ['', []]
    });
  }

  ngOnInit(): void {
    this.date = new Date;
  }

}
