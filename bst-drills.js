const BST = require('./bst');


//Q1
//3,1,4,6,9,2,5,7

//              3(root)
//              /    \ 
//             1       4
//            /         \
//          2            6             
//                    /    \          
//                   5      9
//                        /
//                       7

//E A S Y Q U E S T I O N
//                E(root)
//            /              \
//           A                S
//            \           /        \
//             E         Q          Y
//                      / \       /
//                     I   S    U
//                      \       /
//                       O    T  
//                      /
//                      N



//Remove Root       I
//               
//            /              \
//           A                S
//            \           /        \
//             E         Q          Y
//                      / \       /
//                     O    S    U
//                    /        /
//                   N       T  
//                      
//                      
//                4
//              /    \ 
//             1       6
//            /       /  \
//          2        5    9            
//                       /    
//                      7 
//                        
//    



function main() {
  let numArr = [3, 1, 4, 6, 9, 2, 5, 7];
  let result = insertNumBst(numArr);
  // tree(result);  
  console.log(height(result));

  let fakeTree ={key: 3, left:{key: 5}};
  console.log(bstChecker(result));
  bstChecker(fakeTree)

  let letterArr = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N'];
  insertLettersBst(letterArr);
}

function insertNumBst(arr) {
  let numBst = new BST();
  for (let i = 0; i < arr.length; i++) {
    numBst.insert(arr[i], arr[i]);
  }

  // console.log(numBst)  
  return numBst;
}
function insertLettersBst(arr) {
  let letterBst = new BST();
  for (let i = 0; i < arr.length; i++) {
    letterBst.insert(arr[i], arr[i]);
  }
  // console.log(letterBst)
  return letterBst;
}

//Q4
//it checks to see if there are nodes in the tree, if nothing, return 0 otherwise go through tree and sum all the nodes
//time complexity: o(n) because as tree goes will take longer to traverse
function tree(t) {
  if (!t) {
    return 0;
  }

  return tree(t.left) + t.value + tree(t.right)
}

//Q5

function height(t) {

  if (t.left && t.right) {
    let left = height(t.left) + 1;
    let right = height(t.right) + 1;
    if (right > left) {
      return right;
    }
    return left;
  }

  if (t.left) {

    return height(t.left) + 1;
  }
  if (t.right) {

    return height(t.right) + 1;
  }

  return 1;

}

//Q6

function bstChecker(t, x, y) {
  if(t.key > x || t.key < y){
    return false;
  }

  if(t.left){
    if(!bstChecker(t.left, t.key, y)){
      return false;
    }
  }
  if(t.left){
    if(!bstChecker(t.right, x, t.key)){
      return false;
    }
  }

  return false;

}


main();




