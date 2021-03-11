import { Injectable } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';

interface Node {
    name: string;
    children?: Node[];
}

interface FlatNode {
    expandable: boolean;
    name: string;
    level: number;
}

@Injectable({
    providedIn: 'root'
})

export class WidgetTreeService {

    private data: Node[] = [
        {
            name: 'Youtube',
            children: [
                { name: 'statistics' },
                { name: 'subs' },
                { name: 'liked videos' },
            ]
        },
        {
            name: 'City',
            children: [
                { name: 'weather' },
                { name: 'location' },
            ]
        },
        {
            name: 'Currency',
            children: [
                { name: 'converter' },
            ]
        }
    ];

    private transformer = (node: Node, level: number) => {
        return {
            expandable: !!node.children && node.children.length > 0,
            name: node.name,
            level: level,
        };
    }

    private treeControl = new FlatTreeControl<FlatNode>(node => node.level, node => node.expandable);
    private dataSource = new MatTreeFlatDataSource(
        this.treeControl,
        new MatTreeFlattener(this.transformer, node => node.level, node => node.expandable, node => node.children)
    );

    get getTreeControl() {
        return this.treeControl;
    }

    get getDataSource() {
        return this.dataSource;
    }

    hasChild = (_: number, node: FlatNode) => node.expandable;

    constructor() {
        this.dataSource.data = this.data;
    }

}
