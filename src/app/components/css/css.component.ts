import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css Works!
    </p>
  `,
  styles: [`
      p{
        color:red;
        padding:2px;
      }
    `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
