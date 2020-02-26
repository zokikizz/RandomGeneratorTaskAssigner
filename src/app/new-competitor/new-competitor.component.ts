import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Competitor} from '../Competitor';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-new-competitor',
  templateUrl: './new-competitor.component.html',
  styleUrls: ['./new-competitor.component.scss']
})
export class NewCompetitorComponent implements OnInit {
  @Output() newCompetitorEvent = new EventEmitter<Competitor>();
  competitorForm: FormGroup;

  constructor(private fb: FormBuilder, private matSnackBar: MatSnackBar) {
    this.competitorForm = this.fb.group({
      name: ['', Validators.required],
      number: [0, Validators.required]
    });
  }

  ngOnInit() {
  }

  addNewCompetitor() {
    if (this.competitorForm.value.name.length > 0) {
      this.newCompetitorEvent.emit(this.competitorForm.value as Competitor);
      this.matSnackBar.open(`Added new competitor ${this.competitorForm.value.name}`, '', {
        duration: 1000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom'
      });
      this.competitorForm.reset({
        name: '',
        number: 0
      });
    } else {
      this.matSnackBar.open(`Name is empty.`, '', {
        duration: 1000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom'
      });
    }
  }
}
