import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-circular-menu',
  templateUrl: './circular-menu.component.html',
  styleUrls: ['./circular-menu.component.scss']
})
export class CircularMenuComponent implements OnInit {
  @Output() sidenavModeChanged = new EventEmitter<String>();
  @Input() circularMenuPosition: string = ""; //Left - Right

  sidenavMode: string[] = ['over', 'push', 'side'];
  sidenavIndex: number = 0;
  toolTipTextArray: string[] = ['Sidenav mode OVER', 'Sidenav mode PUSH', 'Sidenav mode SIDE'];
  toolTipText: string =this.toolTipTextArray[0];
  
  constructor() { }

  ngOnInit() {
  }

  sidebarModeChange() {
    this.sidenavIndex++;
    if (this.sidenavIndex > 2) {
      this.sidenavIndex = 0;
    }
    this.sidenavModeChanged.emit(this.sidenavMode[this.sidenavIndex]);
    this.toolTipText = this.toolTipTextArray[this.sidenavIndex];
  }

}
