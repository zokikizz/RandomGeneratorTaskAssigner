import { Component } from '@angular/core';
import {Competitor} from './Competitor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  competitorsList: Competitor[] = [];
  randomNumber = 0;
  winner: Competitor = null;

  addNewCompetitorToArray($event: Competitor) {
    if (!this.competitorsList.find(c => c.number === $event.number)) {
      this.competitorsList.push({ id: this.competitorsList.length + 1, ...$event } );
    } else {
      alert('Chosen number already is taken by one of the developers');
      console.error('Chosen number already is taken by one of the developers');
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  findMinDiffBetweenRandomNumberAndChosenNumbers() {

    if (this.competitorsList.length) {

      let max = 0;
      this.competitorsList.map(c => {
        if (c.number > max) {
          max = c.number;
        }
      } );
      this.randomNumber = this.getRandomInt(max);
      // find winner wip
      let minDiff, minDiffIndex;
      this.competitorsList.map( (c, index) => {
        const currentDiff = Math.abs(c.number - this.randomNumber);
        if (!minDiff || (minDiff > currentDiff)) {
          minDiff = currentDiff;
          minDiffIndex = index;
        }
      });
      // set winner wip
      this.winner = this.competitorsList[minDiffIndex];
    } else {
      console.error('Must add some competitors to find winner');
      alert('Must add some competitors to find winner');
    }
  }
}
