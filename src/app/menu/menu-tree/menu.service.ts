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
      navItem1.navigateTo = 'dashboard';
      navItem1.caption = 'dashboard';
      navItem1.treeModel = [];
      navModel.push(navItem1);

    //   //login test
    //   let loginNavItem1 : NavigationItemModel = new NavigationItemModel();
    //   loginNavItem1.navigateTo = 'login';
    //   loginNavItem1.caption = 'login';
    //   loginNavItem1.treeModel = [];
    //   navModel.push(loginNavItem1);

      /**Item 2 */
      let navItem2 : NavigationItemModel = new NavigationItemModel();
      navItem2.navigateTo = 'setting';
      navItem2.caption = 'Setting';
      navItem2.treeModel = [];
      navModel.push(navItem2);
      
      let treeSet2: TreeModel[] = [{
          navigateTo: 'test_1',
          name: 'setting1',
          icon: '',
          children: null,
      },{
          navigateTo: 'test_2',
          name: 'setting2',
          icon: '',
          children: null,
      }];
      navItem2.treeModel = treeSet2;
      
      /**Item 3 */
      let navItem3 : NavigationItemModel = new NavigationItemModel();
      navItem3.navigateTo = 'config';
      navItem3.caption = 'config';
      navItem3.treeModel = [];
      navModel.push(navItem3);
      
      let treeSet3: TreeModel[] = [{
          navigateTo: '1',
          name: 'config1',
          icon: '',
          children: null,
      },{
          navigateTo: '2',
          name: 'config2',
          icon: '',
          children: null,
      }];
      navItem3.treeModel = treeSet3;

      return navModel;
  }
}
