import { Component, OnInit } from '@angular/core';
import {MenuService} from "./menu.service";
import {NavigationItemModel} from './menu-tree-model';
import {TreeModel} from './menu-tree-model';
import { Router, ActivatedRoute } from '@angular/router';

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
    private router: Router,
    private route: ActivatedRoute) {

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
      console.log(this.navigationModel[index].id);
          this.router.navigate([this.navigationModel[index].id],
          { relativeTo: this.route });
      return;
    }

    this.navigationListIconStatus[index] = this.navigationListIconStatus[index] == 'down' ? 'up' : 'down'; 
    this.navListContentStatus[index] = this.navigationListIconStatus[index] == 'down' ? 'nav-content-hide' : 'nav-content-show';
  }

}
