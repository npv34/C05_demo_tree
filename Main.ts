import {TreeBinary} from "./TreeBinary";

let tree = new TreeBinary();
tree.insertNode(17);
tree.insertNode(16);
tree.insertNode(19);
tree.insertNode(18);
tree.insertNode(21);

tree.deleteNode(18)
console.log(tree.search(18))

