// 208. Implement Trie (Prefix Tree)

// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.


class Trie {
    constructor() {
        this.root = {};
    }

    insert(word) {
        let node = this.root;
        for (let c of word) {
            if (node[c] == null) node[c] = {}; // Create a new object for character c if it doesn't exist
            node = node[c]; // Move to the next node
        }

        node.isWord = true; // Mark the end of the word
    }

    traverse(word) {
        let node = this.root;
        for (let c of word) {
            node = node[c]; // Move to the next node
            if (node == null) return null; // If the node doesn't exist, the word doesn't exist in the trie
        }
        return node; // Return the node representing the last character of the word
    }

    search(word) {
        const node = this.traverse(word); // Get the node representing the last character of the word
        return node != null && node.isWord === true; // Return true if the node exists and represents a complete word
    }

    startsWith(prefix) {
        return this.traverse(prefix) != null; // Return true if there is a node representing the last character of the prefix
    }
}
/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
