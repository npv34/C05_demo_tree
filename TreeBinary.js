"use strict";
exports.__esModule = true;
exports.TreeBinary = void 0;
var Node_1 = require("./Node");
var TreeBinary = /** @class */ (function () {
    function TreeBinary() {
        this.root = null;
    }
    TreeBinary.prototype.insertNode = function (data) {
        var node = new Node_1.Node(data);
        if (!this.root) {
            this.root = node;
        }
        else {
            var defaultRoot = this.root;
            while (this.root) {
                if (data > this.root.data) {
                    if (this.root.right) {
                        this.root = this.root.right;
                    }
                    else {
                        this.root.right = node;
                        break;
                    }
                }
                else if (data < this.root.data) {
                    if (this.root.left) {
                        this.root = this.root.left;
                    }
                    else {
                        this.root.left = node;
                        break;
                    }
                }
            }
            this.root = defaultRoot;
        }
    };
    TreeBinary.prototype.search = function (data) {
        while (this.root) {
            if (data == this.root.data) {
                return this.root;
            }
            else if (data < this.root.data) {
                if (this.root.left) {
                    this.root = this.root.left;
                }
                else {
                    return null;
                }
            }
            else {
                if (this.root.right) {
                    this.root = this.root.right;
                }
                else {
                    return null;
                }
            }
        }
    };
    TreeBinary.prototype.deleteNode = function (data) {
        // tim node
        var nodeDelete = null;
        var parentsNode = null;
        var defaultRoot = this.root;
        while (this.root) {
            if (data == this.root.data) {
                nodeDelete = this.root;
                break;
            }
            else if (data < this.root.data) {
                if (this.root.left) {
                    parentsNode = this.root;
                    this.root = this.root.left;
                }
                else {
                    break;
                }
            }
            else {
                if (this.root.right) {
                    parentsNode = this.root;
                    this.root = this.root.right;
                }
                else {
                    break;
                }
            }
        }
        this.root = defaultRoot;
        if (nodeDelete) {
            // xoa node la - kho co left va right
            if (!nodeDelete.left && !nodeDelete.right) {
                if (parentsNode.left.data == data) {
                    parentsNode.left = null;
                }
                else if (parentsNode.right.data == data) {
                    parentsNode.right = null;
                }
            }
        }
    };
    return TreeBinary;
}());
exports.TreeBinary = TreeBinary;
