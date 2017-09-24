import { Component } from '@angular/core';
import { PloneViews } from '@plone/restapi-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private views:PloneViews,
  ) {
    this.views.initialize();
  }
}
