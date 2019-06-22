export class TreeModel {
    navigateTo: string;
    caption: string;
    icon: string;
    childNodes: TreeModel[];
}

export class NavigationItemModel {
    navigateTo: string;
    caption: string;
    treeModel: Array<TreeModel> = [];
}