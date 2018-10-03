import { Component, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

// export type Student = {
//   name: String;
//   bravery: Number;
//   loyalty: Number;
//   wit: Number;
//   cunning: Number;
// };

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Hogwarts Sorting Hat";
  arrayData: any;
  constructor(private http: Http) {}

  public getJSON(): Observable<any> {
    return this.http.get("../assets/StudentList.json");
  }

  ngOnInit() {
    this.getJSON().subscribe(data => {
      this.arrayData = JSON.parse(data._body);
    });
  }

  processSort() {
    this.arrayData.push({ "name": "Todd", "house": "slytherin" });
    setTimeout(() => {
      this.arrayData.push({ "name": "Wardzinski", "house": "slytherin" });
    }, 5000);
  }
}
