import { Component, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

export type Student = {
  name: String;
  bravery: Number;
  loyalty: Number;
  wit: Number;
  cunning: Number;
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Hogwarts Sorting Hat";

  constructor(private http: Http) {}

  public getJSON(): Observable<any> {
    return this.http.get("../assets/StudentList.json");
  }

  ngOnInit() {
    this.getJSON().subscribe(data => {
      // console.log(data._body);
      var arrayData = JSON.parse(data._body);
      arrayData.forEach(element => {
        console.log(element);
      });
    });
  }

  processSort() {
    alert("button was clicked");
  }
}
