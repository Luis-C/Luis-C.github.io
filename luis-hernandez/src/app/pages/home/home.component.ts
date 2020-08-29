import { Component, OnInit } from "@angular/core";
import { slideInStagger } from "../../route-animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [slideInStagger],
})
export class HomeComponent implements OnInit {
  skills = [
    // Languages
    { skill: "HTML", link: "", icon: "html5" },
    { skill: "JavaScript", link: "", icon: "js" },
    { skill: "CSS", link: "", icon: "css3" },
    { skill: "Java", link: "", icon: "java" },
    { skill: "Python", link: "", icon: "python" },
    { skill: "Flutter", link: "" },
    { skill: "TypeScript", link: "" },
    { skill: "C", link: "" },
    { skill: "SwiftUI", link: "" },
    { skill: "LaTeX", link: "" },

    { skill: "Eclipse", link: "" },
    { skill: "Git", link: "" },
    { skill: "Firebase", link: "" },

    { skill: "Visual Studio Code", link: "" },
    { skill: "Anaconda", link: "" },
    { skill: "PuTTY", link: "" },

    { skill: "VM VirtualBox", link: "" },
    { skill: "PowerShell", link: "" },
    { skill: "Office", link: "" },
    // { skill: "Blockchain", link: "" }
    // { skill: '', link: '' },
  ];

  courses = [
    { course: "Crime & Conflict in Cyberspace", id: "BIT 5114" },
    { course: "Federal Cybersecurity Policy", id: "SPIA 4374" },
    { course: "CyberLeaders Capstone (Machine Learning)", id: "SPIA 4724" },
    { course: "Internet Law", id: "FIN 4014" },
    { course: "Computer Security", id: "CS 4264" },
    { course: "Machine Learning", id: "CS 4824" },
    { course: "Mobile Software Development", id: "CS 3714" },
    { course: "Cloud Software Development", id: "CS 3754" },
    { course: "Systems and Networking Capstone (Blockchain)", id: "CS 4284" },
    { course: "Computer Music", id: "MUS 3066" },
    { course: "Linux Laptop Orchestra", id: "MUS 3314" },
    // { course: "", id: "" }
  ];

  strengths = [
    {
      title: "Learner",
      description:
        "People who are especially talented in the Learner theme have a great desire to learn and want to continuously" +
        " improve. In particular, the process of learning, rather than the outcome, excites them.",
    },
    {
      title: "Deliberative",
      description:
        "People who are especially talented in the Deliberative theme are best described by the serious care they take" +
        " in making decisions or choices. They anticipate the obstacles.",
    },
    {
      title: "Analytical",
      description:
        "People who are especially talented in the Analytical theme search for reasons and causes. They have the " +
        "ability to think about all the factors that might affect a situation.",
    },
    {
      title: "Achiever",
      description:
        "People who are especially talented in the Achiever theme have a great deal of stamina and work hard. They " +
        "take great satisfaction from being busy and productive.",
    },
    {
      title: "Input",
      description:
        "People who are especially talented in the Input theme have a craving to know more. Often they like to collect" +
        " and archive all kinds of information.",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
