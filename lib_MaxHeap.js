
function divideInt(a, b){ return (a - a % b) / b;}

function MaxHeap(arr){
	this.heap = arr;
	this.swap = function(a, b){
		var tmp = this.heap[a];
		this.heap[a] = this.heap[b];
		this.heap[b] = tmp;
		};

	this.leftChildIndex = function(i){ return 2*i+1};
	this.rightChildIndex = function(i){ return 2*i+2};


	this.heapify = function(i) {
		var size = this.heap.length;
		var maxMemberIndex = i;
		var left = this.leftChildIndex(i);
		var right = this.rightChildIndex(i);
		
		if(left < size && this.heap[left] > this.heap[maxMemberIndex]){
			maxMemberIndex = left;
		}

		if(right < size && this.heap[right] > this.heap[maxMemberIndex]){
			maxMemberIndex = right;
		}
		
		if(maxMemberIndex != i){
			this.swap(maxMemberIndex, i);
			this.heapify(maxMemberIndex);
		}
	};

	for (var i = divideInt(this.heap.length, 2); i >= 0; i--){
		//document.write(heap[i]);
		//document.write("<br>");
		this.heapify(i);
	}
	this.toString = function() {
		return this.heap.toString();
	}
	this.print = function(){
		var size = this.heap.length;
		var line = 0;

		for (var i = 0; i < size; i++) {
			if(i == Math.pow(2, line)-1){
				document.write("<br>");
				line += 1;
			}
			document.write(this.heap[i] + " | ");
		}

	}
}
