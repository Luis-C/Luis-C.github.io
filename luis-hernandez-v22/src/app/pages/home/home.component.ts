import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHtml5, faJs, faCss3, faJava, faPython } from '@fortawesome/free-brands-svg-icons';

interface Skill {
  readonly skill: string;
  readonly icon?: IconDefinition;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatTooltipModule,
    FaIconComponent,
  ],
})
export class HomeComponent {
  readonly skills: readonly Skill[] = [
    // Languages
    { skill: 'HTML', icon: faHtml5 },
    { skill: 'JavaScript', icon: faJs },
    { skill: 'CSS', icon: faCss3 },
    { skill: 'Java', icon: faJava },
    { skill: 'Python', icon: faPython },
    { skill: 'Flutter' },
    { skill: 'TypeScript' },
    { skill: 'C' },
    { skill: 'SwiftUI' },
    { skill: 'LaTeX' },
    { skill: 'Eclipse' },
    { skill: 'Git' },
    { skill: 'Firebase' },
    { skill: 'Visual Studio Code' },
    { skill: 'Anaconda' },
    { skill: 'PuTTY' },
    { skill: 'VM VirtualBox' },
    { skill: 'PowerShell' },
    { skill: 'Office' },
  ];

  readonly courses = [
    { course: 'Crime & Conflict in Cyberspace', id: 'BIT 5114' },
    { course: 'Federal Cybersecurity Policy', id: 'SPIA 4374' },
    { course: 'CyberLeaders Capstone (Machine Learning)', id: 'SPIA 4724' },
    { course: 'Internet Law', id: 'FIN 4014' },
    { course: 'Computer Security', id: 'CS 4264' },
    { course: 'Machine Learning', id: 'CS 4824' },
    { course: 'Mobile Software Development', id: 'CS 3714' },
    { course: 'Cloud Software Development', id: 'CS 3754' },
    { course: 'Systems and Networking Capstone (Blockchain)', id: 'CS 4284' },
    { course: 'Computer Music', id: 'MUS 3066' },
    { course: 'Linux Laptop Orchestra', id: 'MUS 3314' },
    // { course: "", id: "" }
  ];

  readonly strengths = [
    {
      title: 'Learner',
      description:
        'People who are especially talented in the Learner theme have a great desire to learn and want to continuously' +
        ' improve. In particular, the process of learning, rather than the outcome, excites them.',
    },
    {
      title: 'Deliberative',
      description:
        'People who are especially talented in the Deliberative theme are best described by the serious care they take' +
        ' in making decisions or choices. They anticipate the obstacles.',
    },
    {
      title: 'Analytical',
      description:
        'People who are especially talented in the Analytical theme search for reasons and causes. They have the ' +
        'ability to think about all the factors that might affect a situation.',
    },
    {
      title: 'Achiever',
      description:
        'People who are especially talented in the Achiever theme have a great deal of stamina and work hard. They ' +
        'take great satisfaction from being busy and productive.',
    },
    {
      title: 'Input',
      description:
        'People who are especially talented in the Input theme have a craving to know more. Often they like to collect' +
        ' and archive all kinds of information.',
    },
  ];
}
