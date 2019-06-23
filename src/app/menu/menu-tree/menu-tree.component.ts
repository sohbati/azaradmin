import { Component, OnInit } from '@angular/core';
import {MenuService} from "./menu.service";
import {NavigationItemModel} from './menu-tree-model';
import {TreeModel} from './menu-tree-model';
import { Router, ActivatedRoute } from '@angular/router';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material';
 
/** Flat node with expandable and level information */
 

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
    this.initTrees();
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

  /**Event Handler*/
  navMenuBarClick(index: number) {
    if (this.navigationModel[index].treeModel == null ||
        this.navigationModel[index].treeModel.length == 0) {
      console.log(this.navigationModel[index].navigateTo);
      
      this.navigateTo(this.navigationModel[index].navigateTo);
          
      return;
    }

    this.navigationListIconStatus[index] = this.navigationListIconStatus[index] == 'down' ? 'up' : 'down'; 
    this.navListContentStatus[index] = this.navigationListIconStatus[index] == 'down' ? 'nav-content-hide' : 'nav-content-show';
  }

  /** Tree Methods and ... */
  treeControl: Array<FlatTreeControl<TreeModel>> = [];
  treeFlattener = [];
  dataSource: Array<MatTreeFlatDataSource<any, TreeModel>> = []; 
  hasChild = [];
 
  private _transformer = (node: TreeModel, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      navigateTo: node.navigateTo,
      icon: node.icon,
    };
  }

  initTrees() {
    for(let i = 0; i < this.navigationModel.length; i++) { 
      if (this.navigationModel[i].treeModel != null && 
          this.navigationModel[i].treeModel.length > 0 ) {
        this.initTree(i);
      }
    }
  }

  initTree(index: number) {
    console.log(index);
    this.treeControl[index] = new FlatTreeControl<TreeModel>(
        node => node.level, node => node.expandable);

    this.treeFlattener[index] = new MatTreeFlattener(
        this._transformer, node => node.level, node => node.expandable, node => node.children);

    this.dataSource[index] = new MatTreeFlatDataSource(this.treeControl[index], this.treeFlattener[index]);

    this.hasChild[index] = (_: number, node: TreeModel) => node.expandable;

    this.dataSource[index].data = this.navigationModel[index].treeModel;

  }
  /** Tree Node Click Event */
  onTreeNodeClick(event: any) {
    console.log(event);
    this.navigateTo(event.navigateTo);
  }

  navigateTo(url : string ) {
    console.log('navigateTo:' + url);
    this.router.navigate([url], { relativeTo: this.route });
  }
}
