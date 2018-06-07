import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-firebase-charts",
  templateUrl: "./firebase-charts.component.html",
  styleUrls: ["./firebase-charts.component.css"]
})
export class FirebaseChartsComponent implements OnInit {
  readonly PUSH_UPS_KEY_IN_FIREBASE: string = "/push-ups";
  readonly ELEMENTS_IN_CHART: number = 10;

  chartLabels: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  chartData: number[] = [];
  chartType: string = "bar";
  chartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
    }
  };

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.db
      .list(this.PUSH_UPS_KEY_IN_FIREBASE, ref => ref.limitToLast(this.ELEMENTS_IN_CHART))
      .valueChanges()
      .subscribe(items => {
        let chartData: number[] = [];
        items.forEach(item => {
          chartData.push(item["count"]);
        });
        this.chartData = chartData;
      });
  }
}
