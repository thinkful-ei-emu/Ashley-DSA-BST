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
  tree(result);

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
function tree(t) {
  if (!t) {
    return 0;
  }
  // console.log('sum:', tree(t.left) + t.value + tree(t.right))
  console.log('tLeft:', tree(t.left), 'tVal:', t.value, 'tRight:', tree(t.right), 'sum:', tree(t.left) + t.value + tree(t.right))
  return tree(t.left) + t.value + tree(t.right)
}



main();




