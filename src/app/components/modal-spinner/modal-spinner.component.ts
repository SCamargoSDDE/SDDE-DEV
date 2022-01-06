import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-spinner',
  templateUrl: './modal-spinner.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [
    `.modal-content {
      background: none;
      color: white;
      border: none;
    }
    .mat-progress-spinner circle, .mat-spinner circle {
    stroke: #29ABE2;
    }
  `,
  ],
})
export class ModalSpinnerComponent implements OnInit {

  constructor(
    config: NgbModalConfig, 
    private modalService: NgbModal
  ) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

}
