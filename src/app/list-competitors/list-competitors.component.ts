import {Component, Input, OnInit} from '@angular/core';
import {Competitor} from '../Competitor';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-list-competitors',
  templateUrl: './list-competitors.component.html',
  styleUrls: ['./list-competitors.component.scss']
})
export class ListCompetitorsComponent implements OnInit {
  @Input() listOfCompetitors: Competitor[];
  @Input() winner: Competitor = null;

  constructor(private matSnackBar: MatSnackBar) { }

  ngOnInit() {
  }

  trackByFn(index, item) {
    return item.id;
  }

  deleteCompetitor(competitor: Competitor) {
    // remove competitor
    let index;
    this.listOfCompetitors.map((c, i) => {
      if (c.id === competitor.id) {
        index = i;
      }
    });

    if (index || index === 0) {
      this.listOfCompetitors.splice(index, 1);
      this.matSnackBar.open(`Competitor ${competitor.name} is deleted`, '', {
        duration: 2000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom'
      });
    }
  }
}
