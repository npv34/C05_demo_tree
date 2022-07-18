import {Node} from "./Node";

export class TreeBinary {
    root: any;

    constructor() {
        this.root = null;
    }

    insertNode(data) {
        let node = new Node(data);

        if (!this.root) {
            this.root = node;
        } else {
            let defaultRoot = this.root;
            while (this.root) {
                if (data > this.root.data) {
                    if (this.root.right) {
                        this.root = this.root.right;
                    } else {
                        this.root.right = node
                        break;
                    }
                } else if (data < this.root.data) {
                    if (this.root.left) {
                        this.root = this.root.left;
                    } else {
                        this.root.left = node
                        break;
                    }
                }
            }
            this.root = defaultRoot
        }
    }

    search(data) {
        while (this.root) {
            if (data == this.root.data) {
                return this.root
            } else if (data < this.root.data) {
                if (this.root.left) {
                    this.root = this.root.left;
                } else {
                    return null;
                }
            } else {
                if (this.root.right) {
                    this.root = this.root.right;
                } else {
                    return null;
                }
            }
        }
    }

    deleteNode(data) {
        // tim node

        let nodeDelete = null;
        let parentsNode = null;
        let defaultRoot = this.root;
        while (this.root) {
            if (data == this.root.data) {
                nodeDelete = this.root;
                break;
            } else if (data < this.root.data) {
                if (this.root.left) {
                    parentsNode = this.root;
                    this.root = this.root.left;
                } else {
                   break;
                }
            } else {
                if (this.root.right) {
                    parentsNode = this.root;
                    this.root = this.root.right;
                } else {
                    break;
                }
            }
        }
        this.root = defaultRoot

        if (nodeDelete) {
            // xoa node la - kho co left va right
            if (!nodeDelete.left && !nodeDelete.right) {
                if (parentsNode.left.data == data) {
                    parentsNode.left = null
                }else if (parentsNode.right.data == data) {
                    parentsNode.right = null
                }
            }

            // xoa node co node con

        }
    }
}
