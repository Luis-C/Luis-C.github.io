import { Component, OnInit } from "@angular/core";
import { slideInStagger } from "../../route-animations";

import * as data from "./portfolio.json";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
  animations: [slideInStagger],
})
export class PortfolioComponent implements OnInit {
  projects: any = (data as any).default;

  codeProjects = [
    {
      title: "Test Title",
      details: "This was a really cool project becase. etc. Cool stuff",
      imgSrc: "assets/images/cu.png",
      codeSrc: "https://github.com/Luis-C/Luis-C.github.io",
      example: "https://luis-c.github.io/SheHacks-VT/home",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
