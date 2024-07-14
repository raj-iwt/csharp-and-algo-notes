class TrieNode {
    constructor() {
      this.children = {};
      this.isEnd = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let current = this.root;
      for (let i = 0; i < word.length; i++) {
        if (!current.children[word[i]]) {
          current.children[word[i]] = new TrieNode();
        }
  
        current = current.children[word[i]];
      }
  
      current.isEnd = true;
    }
  
    search(word) {
      let current = this.root;
      for (let i = 0; i < word.length; i++) {
        if (!current.children[word[i]]) {
          return 'nomatch';
        }
  
        current = current.children[word[i]];
      }
  
      return current.isEnd ? 'fullmatch' : 'partialmatch';
    }
  }
  
  class Board {
      constructor(board, i, j) {
          this.board = board;
          this.i = i;
          this.j = j;
          this.current = [];
          this.current.push(board[i][j]);
          this.lastMove = [];
      }
  
      current() {
          return this.current;
      }
  
      up() {
          if (this.i > 0 && this.lastMove[this.lastMove.length - 1] !== 'down') {
              this.i--;
              this.lastMove.push('up');
              this.current.push(this.board[this.i][this.j]);
              return true;
          }
  
          return false;
      }
  
      down() {
          if (this.i < this.board.length - 1 && this.lastMove[this.lastMove.length - 1] !== 'up') {
              this.i++;
              this.lastMove.push('down');
              this.current.push(this.board[this.i][this.j]);
              return true;
          }
  
          return false;
      }
  
      left() {
          if (this.j > 0 && this.lastMove[this.lastMove.length - 1] !== 'right') {
              this.j--;
              this.lastMove.push('left');
              this.current.push(this.board[this.i][this.j]);
              return true;
          }
  
          return false;
      }
  
      right() {
          if (this.j < this.board[this.i].length - 1 && this.lastMove[this.lastMove.length - 1] !== 'left') {
              this.j++;
              this.lastMove.push('right');
              this.current.push(this.board[this.i][this.j]);
              return true;
          }
  
          return false;
      }
  
      back() {
          if (this.lastMove[this.lastMove.length - 1] === 'up') {
              this.current.pop();
              this.lastMove.pop();
              this.i++;
          } else if (this.lastMove[this.lastMove.length - 1] === 'down') {
              this.current.pop();
              this.lastMove.pop();
              this.i--;
          } else if (this.lastMove[this.lastMove.length - 1] === 'left') {
              this.current.pop();
              this.lastMove.pop();
              this.j++;
          } else if (this.lastMove[this.lastMove.length - 1] === 'right') {
              this.current.pop();
              this.lastMove.pop();
              this.j--;
          }
      }
  
  }



/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const result = [];

  const trie = new Trie();
  for (let i = 0; i < words.length; i++) {
    trie.insert(words[i]);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
        const b = new Board(board, i, j);
        let match = trie.search(b.current.join(''));
        while(match === 'partialmatch') {
            console.log(b.current.join(''));
            if(b.up()) {
                match = trie.search(b.current.join(''));
                if (match === 'fullmatch') {
                    result.push(b.current.join(''));
                    break;
                }
                if(match === 'nomatch') {
                    b.back();
                    break;
                }
            } else if(b.down()) {
                match = trie.search(b.current.join(''));
                if (match === 'fullmatch') {
                    result.push(b.current.join(''));
                    break;
                }
                if(match === 'nomatch') {
                    b.back();
                    break;
                }

            } else if(b.left()) {
                match = trie.search(b.current.join(''));
                if (match === 'fullmatch') {
                    result.push(b.current.join(''));
                    break;
                }
                if(match === 'nomatch') {
                    b.back();
                    break;
                }
            } else if(b.right()) {
                match = trie.search(b.current.join(''));
                if (match === 'fullmatch') {
                    result.push(b.current.join(''));
                    break;
                }
                if(match === 'nomatch') {
                    b.back();
                    break;
                }
            }
        }
    }
  }
  return result;
};



const board = [
  ["a", "b", "c"],
  ["a", "e", "d"],
  ["a", "f", "g"],
];

const words = ["abcdefg", "gfedcbaaa", "eaabcdgfa", "befa", "dgc", "ade"];

console.log(findWords(board, words)); // ["eat", "oath"]

