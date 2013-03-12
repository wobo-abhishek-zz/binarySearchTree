 var BST = function(){

 	//this.left = node.left
 	root  = null;

	/**
		BST Search
	**/
	search: function(key){
	 	currentNode = this.root
	 	do{
	 		if(key === currentNode.key){
	 			return currentNode;
	 		}
	 		else if (key<currentNode.key){
	 			currentNode = currentNode.left;
	 		}
	 		else{
	 			currentNode = currentNode.right;	
	 		}
	 	} while(!currentNode)
	 	return null;
	 };
	 /**
	 	BST add
	 **/
	 add: function(value){
	 	if(this.search(value) !== null){
	 		return 'node already exists'
	 	}
	 	else if(this.root === null){
	 		this.root = new Node({value:value});
	 	}
	 	else{
	 		this.addHelper(this.root, value);
	 	}
	 };
	 /**
	 	BST helper function to add a node	
	 **/
	 addHelper: function(node, value){
	 	if(value<node.value){
	 		if(node.leftChild == null){
	 			node.leftChild = new Node(value); 			
	 			return;
	 		}
	 		else{
	 			this.addHelper(node.leftChild, value); 			
	 		} 				
	 	}
	 	else{
	 		if(node.rightChild == null){
	 			node.rightChild = new Node(value);
	 			return;
	 		}
	 		else{
	 			this.addHelper(node.rightChild, value);
	 		}
	 	}
	 }
 };

 var Node = function(node){
 	isRoot: node.isRoot || false, 
 	leftNode: node.leftChild || {},
 	rightNode: node.rightChild || {},
 	key: node.key,
 	value: node.value
 };
 Node.prototype.leftChild = function(){
 	return this.leftChild();
 };
 Node.prototype.rightChild = function(){
 	return this.rightChild();
 };


 bst = new BST();
 bst.add(6);
 bst.add(7);
 bst.search(5);