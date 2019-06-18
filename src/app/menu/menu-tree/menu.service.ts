import { Injectable } from '@angular/core';
import {NavigationItemModel} from './menu-tree-model';
import {TreeModel} from './menu-tree-model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getInitDemoNavigationItems(): NavigationItemModel[] {
      let navModel: Array<NavigationItemModel> = [];

      /**Item 1 */
      let navItem1 : NavigationItemModel = new NavigationItemModel();
      navItem1.caption = 'Dashbaord';
      navItem1.treeModel = [];
      navModel.push(navItem1);

      /**Item 2 */
      let navItem2 : NavigationItemModel = new NavigationItemModel();
      navItem2.caption = 'Setting';
      navItem2.treeModel = [];
      navModel.push(navItem2);
      
      let treeSet2: TreeModel[] = [{
          id: '1',
          caption: 'setting1',
          icon: '',
          childNodes: null,
      },{
          id: '2',
          caption: 'setting2',
          icon: '',
          childNodes: null,
      }];
      navItem2.treeModel = treeSet2;
      
      /**Item 3 */
      let navItem3 : NavigationItemModel = new NavigationItemModel();
      navItem3.caption = 'config';
      navItem3.treeModel = [];
      navModel.push(navItem3);
      
      let treeSet3: TreeModel[] = [{
          id: '1',
          caption: 'config1',
          icon: '',
          childNodes: null,
      },{
          id: '2',
          caption: 'config2',
          icon: '',
          childNodes: null,
      }];
      navItem3.treeModel = treeSet3;

      return navModel;
  }
}
