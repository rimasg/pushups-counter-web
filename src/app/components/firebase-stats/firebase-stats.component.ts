import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-firebase-stats",
  templateUrl: "./firebase-stats.component.html",
  styleUrls: ["./firebase-stats.component.css"]
})
export class FirebaseStatsComponent implements OnInit {
  items: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.items = this.db.list("messages").valueChanges();
  }
}
