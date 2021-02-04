// https://leetcode.com/problems/implement-trie-prefix-tree/

class Node {
    constructor(char) {
      this.children = {};
      // keys of the obj represent letters, values are the nodes
      this.isTerminal = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new Node();
    }
  
    insert(word, node=this.root, i=0) {
      if (i === word.length) {
        node.isTerminal = true;
        return;
      }
  
      const first = word[i];
  
      if (!(first in node.children)) {
        node.children[first] = new Node();
      }
  
      this.insert(word, node.children[first], i + 1);
    }
  
    search(word, node=this.root, i=0) {
      if (i === word.length) {
        return node.isTerminal;
      }
  
      const first = word[i];
      if (first in node.children) {
        return this.search(word, node.children[first], i + 1);
      }
  
      return false;
    }
  
    startsWith(word, node=this.root, i=0) {
      if (i === word.length) {
        return true;
      }
  
      const first = word[i];
      if (first in node.children) {
        return this.startsWith(word, node.children[first], i + 1);
      }
  
      return false;
    }
  }
  
  
  const myTrie = new Trie();
  myTrie.insert('java');
  myTrie.insert('javascript');
  myTrie.insert('skateboard');
  myTrie.insert('ska');
  myTrie.insert('skinny');
  console.log(myTrie.search('java')); // true
  console.log(myTrie.search('javascript')); // true
  console.log(myTrie.search('ska')); // true
  console.log(myTrie.search('skateboard')); // true
  console.log(myTrie.search('skinny')); // true
  console.log(myTrie.search('javalang')); // false
  console.log(myTrie.search('javas')); // false
  console.log(myTrie.search('ski')); // false
  
  myTrie.insert('ski'); 
  console.log(myTrie.search('ski')); // true
  
  
  
  
  
  
  
  
  