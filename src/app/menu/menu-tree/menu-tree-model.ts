export class TreeModel {
    id: string;
    caption: string;
    icon: string;
    childNodes: TreeModel[];
}

export class NavigationItemModel {
    id: string;
    caption: string;
    treeModel: Array<TreeModel> = [];
}