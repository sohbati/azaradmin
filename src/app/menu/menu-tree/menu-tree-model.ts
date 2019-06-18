export class TreeModel {
    id: string;
    caption: string;
    icon: string;
    childNodes: TreeModel[];
}

export class NavigationItemModel {
    caption: string;
    treeModel: Array<TreeModel> = [];
}