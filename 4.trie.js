//its basically a graph that stores

class Node {
  constructor() {
    this.letters = {};
    this.end = false;
  }

  setEnd() {
    this.end = true;
  }

  isEnd() {
    return this.end
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  add (input, node = this.root){
    if(input.length === 0) {
      node.end = true;
      return;
    }

    let firstLetter = input[0];
    if(node.letters[firstLetter]) {
      return this.add(input.slice(1), node.letters[firstLetter])
    } else {
      node.letters[firstLetter] = new Node()
      return this.add(input.slice(1), node.letters[firstLetter])
    }
  }

  isWord(word) {
    let node = this.root;
    for (let letter of word) {
      if(!node.letters[letter]) {
        return false;
      } else {
        node = node.letters[letter];
      }
    }
    return node.isEnd()
  }

  print(cb) {
    let words = [];
    let stringy = new String;
    let search = function(node, string) {
      let objectKeys = Object.keys(node.letters)
      console.log(node)
      if (objectKeys.length !== 0) {
        objectKeys.forEach((letter) => {
          search(node.letters[letter], string.concat(letter));
        })
      }
      if(node.isEnd()) {
        words.push(string);
      }
    }
    search(this.root, stringy)
    console.log(words)
  }
}

let trie = new Trie();
trie.add('ketchup');
trie.add('mouse');
trie.add('mou');
console.log(trie.isWord('mo'));
console.log(trie.isWord('mouse'));
trie.print();