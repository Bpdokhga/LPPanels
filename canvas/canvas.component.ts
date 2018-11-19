import { Component, OnInit } from '@angular/core';
import { TileComponent } from '../tile/tile.component';
import { BusinessCardComponent } from '../business-card/business-card.component';
//import { ToolBarComponent } from '../tool-bar/tool-bar.component';

import { MatSnackBar } from '@angular/material';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { StatusService } from "../services/status.service";
import { StatusServicePacket } from "../StatusServicePacket";

@Component({
  selector: 'lp-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  mode: string = "RecordPanel"; // "SidePanel";
  status: string;


  constructor(private snackBar: MatSnackBar,
    private statusService: StatusService) {

    // Status Service
    this.statusService.statusChange$.subscribe(value => {
      this.openSnackBar(value);
    });
  }

  openSnackBar(packet: StatusServicePacket) {
    if (packet != null) {
      console.log(packet.message);
      if (packet.isTimed) {
        this.snackBar.open(packet.message, "Ok", {
          duration: 3000,
        });
      }
      else {
        this.snackBar.open(packet.message, "Dismiss");
      }
    }
    else {
      console.log("Packet is empty.");
    }
  }

  ngOnInit() {
  }

}
