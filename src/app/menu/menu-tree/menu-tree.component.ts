import { Component, OnInit } from '@angular/core';
import {MenuService} from "./menu.service";
import {NavigationItemModel} from './menu-tree-model';
import {TreeModel} from './menu-tree-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-tree',
  templateUrl: './menu-tree.component.html',
  styleUrls: ['./menu-tree.component.scss']
})
export class MenuTreeComponent implements OnInit {

  navigationListIconStatus: string[] = [];
  navListContentStatus: string[] = [];
  navigationModel: Array<NavigationItemModel> = [];

  constructor(private menuService: MenuService,
    private router: Router) {

    this.initNavigation();
   }

  ngOnInit() {
  }

  initNavigation() {
    this.navigationModel = this.menuService.getInitDemoNavigationItems();
    for(let i = 0; i < this.navigationModel.length; i++) { 
      this.navigationListIconStatus[i] = 'down';
      this.navListContentStatus[i] = 'nav-content-hide';
    }
  }

  /**Event */
  navMenuBarClick(index: number) {
    if (this.navigationModel[index].treeModel == null ||
        this.navigationModel[index].treeModel.length == 0) {
      this.router.navigate([this.navigationModel[index].id]);
      return;
    }

    this.navigationListIconStatus[index] = this.navigationListIconStatus[index] == 'down' ? 'up' : 'down'; 
    this.navListContentStatus[index] = this.navigationListIconStatus[index] == 'down' ? 'nav-content-hide' : 'nav-content-show';
  }

}
