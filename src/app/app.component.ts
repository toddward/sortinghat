import { Component, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

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
    return this.http.get("../assets/RandomStudentList.json");
  }

  ngOnInit() {
    this.getJSON().subscribe(data => {
      this.arrayData = JSON.parse(data._body);
    });
  }

  processSort() {
   for (let index = 0; index < this.arrayData.length; index++) {
      const element = this.arrayData[index];
      this.http.post('http://sorting-hat-demojam.127.0.0.1.nip.io/api/v1/sort', element).subscribe(
        res => {
          var house = res.json().house;
          console.log(index + ' ' + house);
          this.arrayData[index].house = house;
        }
      );
    }
  }
}
