import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  posts = [
    {
      title: "Neat Tree",
      imageUrl: "assets/tree.jpeg",
      username: "nature",
      content: "I saw this neat tree during my hike today"
    },
    {
      title: "Showy Mountain",
      imageUrl: "assets/mountain.jpeg",
      username: "mountainlover",
      content: "Here is a picture of showy mountain"
    },
    {
      title: "Mountain Biking",
      imageUrl: "assets/biking.jpeg",
      username: "biking12222",
      content: "I did some biking today"
    },
    {
      title: "Mountain Biking",
      imageUrl: "assets/biking.jpeg",
      username: "biking12222",
      content: "I did some biking today"
    }
  ];
}
