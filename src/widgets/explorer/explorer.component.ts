import {Component, Input, OnInit} from '@angular/core';
import ExplorerTree, {ExplorerTreeNode} from './ExplorerTree';
import {sort} from '../../utils';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html'
})
export class ExplorerComponent implements OnInit {
  @Input() json = [];
  public tree: ExplorerTree;
  public path = '';
  public folder = [];
  public searchResult: ExplorerTreeNode[];

  private _search = '';

  listOfColumn = [
    {
      title: 'Name',
      key: 'segment'
    },
    {
      title: 'Type',
      key: 'type'
    },
    {
      title: 'Modification Date',
      key: 'modificationDate'
    },
    {
      title: 'Size',
      key: 'size'
    }
  ];

  ngOnInit(): void {
    this.tree = new ExplorerTree(this.json);
    this.folder = this.tree.getChildrenByPath('');
    this.sort({key: 'segment', value: null});
  }

  set search(value) {
    this._search = value;
    if (value) {
      this.searchNode();
    } else {
      this.searchResult = null;
    }
  }

  get search() {
    return this._search;
  }

  goToPath() {
    const folder = this.tree.getChildrenByPath(this.path);

    if (folder) {
      this.folder = folder;
      this.sort({key: 'segment', value: null});
    } else {
      this.path = '';
      this.folder = this.tree.getChildrenByPath('');
    }
  }

  goBack() {
    if (this.path) {
      this.path = this.path.split('/').slice(0, -1).join('/');
    }

    this.goToPath();
  }

  itemSelect(item) {
    if (item.type === 'folder') {
      this.path = item.path;
    }

    this.goToPath();
  }

  searchNode() {
    this.searchResult = this.tree.findByName(this.search);
  }

  searchSelect(node: ExplorerTreeNode) {
    if (node.type === 'folder') {
      this.path = node.path;
    } else {
      this.path = node.path.split('/').slice(0, -1).join('/');
    }
    this.search = '';
    this.searchResult = null;

    this.goToPath();
  }

  sort({key, value}) {
    if (value) {
      this.folder = this.folder.sort((a, b) => sort(a, b, key, value));
    } else {
      this.folder = this.folder.sort((a, b) => sort(a, b, key, 'ascend'));
    }
  }
}
