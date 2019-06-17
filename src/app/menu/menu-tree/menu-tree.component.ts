import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu-tree',
  templateUrl: './menu-tree.component.html',
  styleUrls: ['./menu-tree.component.scss']
})
export class MenuTreeComponent implements OnInit {

  navigationList: string[] = ['down'];
  navContent: string[] = ['nav-content-hide'];

  constructor() { }

  ngOnInit() {
  }

  navMenuBarClick(index: number) {
    this.navigationList[index] = this.navigationList[index] == 'down' ? 'up' : 'down'; 
    this.navContent[index] = this.navigationList[index] == 'down' ? 'nav-content-hide' : 'nav-content-show';
  }

}
