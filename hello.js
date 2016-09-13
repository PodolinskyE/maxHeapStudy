

var heap = [1, 5, 3, 385, 4, 6, 9, 8, 359 , 456, 78, 3, 24, 65, 465];
//var heap = [6, 0, 54, 4, 8, 9, 0];
//var heap = [0, 4, 8];
document.write(heap.toString());
document.write("<br>");
document.write("<br>");



var heapObj = new MaxHeap(heap);

document.write("after heapify object:<br>");
document.write(heapObj.toString());

document.write("<br>");
document.write("print object:<br>");

heapObj.print();
