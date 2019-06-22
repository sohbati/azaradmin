import { Component, OnInit } from '@angular/core';
import {MenuService} from "./menu.service";
import {NavigationItemModel} from './menu-tree-model';
import {TreeModel} from './menu-tree-model';
import { Router, ActivatedRoute } from '@angular/router';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussel sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

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
      this.router.navigate([this.navigationModel[index].navigateTo],
          { relativeTo: this.route });
      return;
    }

    this.navigationListIconStatus[index] = this.navigationListIconStatus[index] == 'down' ? 'up' : 'down'; 
    this.navListContentStatus[index] = this.navigationListIconStatus[index] == 'down' ? 'nav-content-hide' : 'nav-content-show';
  }

  /** Tree Methods and ... */
  treeControl: Array<FlatTreeControl<ExampleFlatNode>> = [];
  treeFlattener = [];
  dataSource = []; 
  hasChild = [];

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
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
    this.treeControl[index] = new FlatTreeControl<ExampleFlatNode>(
        node => node.level, node => node.expandable);

    this.treeFlattener[index] = new MatTreeFlattener(
        this._transformer, node => node.level, node => node.expandable, node => node.children);

    this.dataSource[index] = new MatTreeFlatDataSource(this.treeControl[index], this.treeFlattener[index]);

    this.hasChild[index] = (_: number, node: ExampleFlatNode) => node.expandable;

    this.dataSource[index].data = TREE_DATA;

  }
}
