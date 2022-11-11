import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {



  constructor(private serieService: SerieService) {}
  series: Array<Serie> = [];


  getSerieList(){
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      const total: HTMLElement = document.getElementById("total-series")!;
      const promTemps = promedioTemps(this.series)
      total.innerHTML = `Promedio temporadas: ${promTemps}`;
    });

  }

  ngOnInit() {
    this.getSerieList();
  }

}

function promedioTemps(series: Serie[]): number {
  var total: number = 0;
  var each: number = 0;
  series.forEach((serie) => total = total + serie.seasons)
  series.forEach((serie) => each = each + 1);
  return total/each
}
