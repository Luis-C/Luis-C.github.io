import { Component, OnInit } from "@angular/core";
import { slideInStagger } from "../../route-animations";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
  animations: [slideInStagger],
})
export class PortfolioComponent implements OnInit {
  codeProjects = [
    {
      title: "testname",
      details: "test info",
      imgSrc: "assets/images/cu.png",
      codeSrc: "https://github.com/Luis-C/Luis-C.github.io",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
