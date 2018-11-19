import { Component } from '@angular/core';
import { CanvasComponent } from './canvas/canvas.component';
import { TileComponent } from './tile/tile.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { NameValue } from './NameValue';
import { Person } from './Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
