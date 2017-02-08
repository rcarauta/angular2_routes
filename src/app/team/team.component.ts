import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-team',
  template: `
    <p>Welcome to the team, our team members are...</p>
    <ul>
      <li>Funcionando!</li>
    </ul>
  `,
})
export class TeamComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
