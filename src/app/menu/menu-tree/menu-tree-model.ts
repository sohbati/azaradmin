export class TreeModel {
    navigateTo: string;
    name: string;
    expandable?: boolean;
    level?: number;
  
    icon: string;
    children?: TreeModel[];
    
}

export class NavigationItemModel {
    navigateTo: string;
    caption: string;
    treeModel: Array<TreeModel> = [];
}