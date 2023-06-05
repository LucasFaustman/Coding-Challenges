// 211. Design Add and Search Words Data Structure
// Design a data structure that supports adding new words and finding if a string matches any previously added string.

// Implement the WordDictionary class:

// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

function Node () {
    // children object to store children nodes
    this.children = {};
    
    // boolean to check if the current node represents a letter that is the ending of a word
    this.isWordEnding = false;
    
}

var WordDictionary = function() {
    // the root is a node itself.
    this.root = new Node();
};

WordDictionary.prototype.addWord = function(word) {
    // we will traverse the trie starting from the root node and add nodes for each letter in word.
    let currentNode = this.root;
    
    for (const char of word) {
        // if a node exists for a given letter then don't do anything.
        // if not create a new node for that letter.
        currentNode.children[char] = currentNode.children[char] || new Node();
        
        // move on to the next node.
        currentNode = currentNode.children[char];
    }
    
    // after looping, the currentNode variable will point to the node representing the last letter of word.
    // so we mark that node as a word ending.
    currentNode.isWordEnding = true;
};


WordDictionary.prototype.search = function(word) {
    // helper function to call recursively
    const searchHelper = (currentNode, i) => {
        
        // if we reach the i that's the length of word and currentNode is a word ending, word exists.
        if (i === word.length) return currentNode.isWordEnding
        
        const char = word[i]
        
        // if char is a dot, that means we can match it with any letter.
        // to do that programmatically, we go through all of the children of the current node. why?
        // we don't know which, if any, of the children can use the dot to make the given string.
        // so we go through all of them and check if any of them can return true.
        if (char === '.') {
            for (const char of Object.keys(currentNode.children)) {
                const child = currentNode.children[char];
                if (searchHelper(child, i + 1)) return true
            }
            
            // if no child can make use of the dot to come up with the given word,
            // then even the alternative version (e.g 'pad') 
            // of the given string (e.g 'pa.') doesn't exist in our dictionary.
            return false
        } 
        
        // if char isn't a dot, it's more straightforward...
        else {
            // looking for a letter that should come after another and can't find it?
            // that means the word doesn't exist in our dictionary so return false.
            if (!(char in currentNode.children)) return false
            
            // go on to the next node in our dictionary and the next letter in the word
            return searchHelper(currentNode.children[char], i + 1)
        }
    }
    
    // we call this function by starting at our root node with the index for the first letter in the string
    return searchHelper(this.root, 0)
};
/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */