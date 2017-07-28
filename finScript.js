class ContainerObj {
	constructor(a,b,c){
		this.a = a;
		this.b = b;
		this.c = c;
	}
}

const test = 'this is working';

class workFlow {
	constructor(docs, type) {
	if(docs === undefined){
		this.docs = {};
		}else{
			if(docs.constructor === Array){
				this.docs = docs;
			}else{
				console.log('Type of docs needs to be an array');
			}
		}
	
    this.type = type;
  }
	addDoc(doc){
		this.docs[doc.name] = doc;	
		}

	getDocs(){
		return this.docs;
	}
		
		
	getProgress(){
		x = this.docs;
		var object = {
			completed:0,
			total:0		
		};
		for(var i = 0; i < x.length; i++){
			var sourceDoc = x[i];
			for(var t = 0; t < sourceDoc.docProcess.length; t++){
				var process = sourceDoc.docProcess[t];
				if(process.completed){
					object.completed += 1;
				}
				object.total += 1;
			}
		}
		return object;
	}

}
class SourceDoc {
  constructor(name, to, from, date, lines, type, docProcess) {
  	this.name = name;
    this.to = to;
    this.from = from;
    this.date = date;
    this.lines = lines; 
    this.type = type;
    this.docProcess = docProcess;
  }

  addProcess(type, target){
		var process = {
			type: type,
			target: target,
			completed: false
		}
		this.docProcess.push(process);
			
	}

};

