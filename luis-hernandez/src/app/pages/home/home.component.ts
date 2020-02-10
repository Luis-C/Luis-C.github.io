import { Component, OnInit } from "@angular/core";
import { slideInStagger } from "../../route-animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [slideInStagger]
})
export class HomeComponent implements OnInit {
  skills = [
    { skill: "HTML", link: "" },
    { skill: "TypeScript", link: "" },
    { skill: "JavaScript", link: "" },
    { skill: "CSS", link: "" },
    { skill: "C", link: "" },
    { skill: "Java", link: "" },
    { skill: "Eclipse", link: "" },
    { skill: "GitHub", link: "" },
    { skill: "Firebase", link: "" },
    { skill: "Flutter", link: "" },
    { skill: "Clip Studio Paint", link: "" },
    { skill: "Visual Studio Code", link: "" },
    { skill: "Anaconda", link: "" },
    { skill: "Python", link: "" },
    { skill: "PuTTY", link: "" },
    { skill: "Office", link: "" },
    { skill: "VM VirtualBox", link: "" },
    { skill: "PowerShell", link: "" },
    { skill: "SwiftUI", link: "" },
    { skill: "LaTeX", link: "" }
    // { skill: "Blockchain", link: "" }
    // { skill: '', link: '' },
  ];

  strengths = [
    {
      title: "Learner",
      description:
        "People who are especially talented in the Learner theme have a great desire to learn and want to continuously" +
        " improve. In particular, the process of learning, rather than the outcome, excites them."
    },
    {
      title: "Deliberative",
      description:
        "People who are especially talented in the Deliberative theme are best described by the serious care they take" +
        " in making decisions or choices. They anticipate the obstacles."
    },
    {
      title: "Analytical",
      description:
        "People who are especially talented in the Analytical theme search for reasons and causes. They have the " +
        "ability to think about all the factors that might affect a situation."
    },
    {
      title: "Achiever",
      description:
        "People who are especially talented in the Achiever theme have a great deal of stamina and work hard. They " +
        "take great satisfaction from being busy and productive."
    },
    {
      title: "Input",
      description:
        "People who are especially talented in the Input theme have a craving to know more. Often they like to collect" +
        " and archive all kinds of information."
    }
  ];

  constructor() {}

  ngOnInit() {}
}
