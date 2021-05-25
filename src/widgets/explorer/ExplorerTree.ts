import * as moment from 'moment';

export class ExplorerTreeNode {
  public path: string | null = null;
  public segment: string | null = null;
  public type: 'folder' | 'file' | null = null;
  public modificationDate: moment.Moment | null = null;
  public size: number | null = null;
  public children: ExplorerTreeNode[];

  constructor(node: any) {
    this.path = node.path;
    this.segment = node.segment;
    this.type = node.type;
    this.modificationDate = node.modificationDate;
    this.size = node.size;
    this.children = [];
  }

  appendChild(node: ExplorerTreeNode) {
    this.children.push(node);
    return node;
  }

  findChild(segment: string) {
    return this.children.find(child => child.segment === segment);
  }
}

export default class ExplorerTree {
  private root: ExplorerTreeNode;

  constructor(json: Array<object>) {
    this.root = new ExplorerTreeNode({
      path: '',
      type: 'folder',
    });

    for (const node of json) {
      this.addNode(node);
    }
  }

  addNode(node: any) {
    const segments = node.path.split('/');
    let currentNode = this.root;

    segments.forEach((segment, index) => {
      const child = currentNode.findChild(segment);

      if (child) {
        currentNode = child;
      } else if (index !== segments.length - 1) {
        currentNode = currentNode.appendChild(new ExplorerTreeNode({
          path: segments.slice(0, index + 1).join('/'),
          segment,
          type: 'folder',
          modificationDate: moment()
        }));
      } else {
        currentNode = currentNode.appendChild(new ExplorerTreeNode({
          ...node,
          modificationDate: node.modificationDate ? moment(node.modificationDate) : null,
          segment
        }));
      }
    });
  }


  getChildrenByPath(path: string) {
    const segments = path.split('/').filter(segment => !!segment);
    let currentNode = this.root;

    for (const segment of segments) {
      if (currentNode) {
        currentNode = currentNode.findChild(segment);
      } else {
        return null;
      }
    }

    return currentNode ? currentNode.children : null;
  }

  findByName(name: string, node?: ExplorerTreeNode | null) {
    let res = [];

    if (!node) {
      node = this.root;
    }

    if (node.segment && node.segment.search(name) >= 0) {
      res.push(node);
    }

    if (node.children) {
      for (const child of node.children) {
        res = [...this.findByName(name, child), ...res];
      }
    }

    return res;
  }
}
