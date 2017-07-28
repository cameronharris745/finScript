# finScript
Business Logic for Javascript

This was just an idea that I came up with when building a project and not really finding a decent framework that standardizes how javascript transfers business document information. It's main goal is to atleast start a discussion on how we can do this with ECMAscript as a standard object oriented method to store and change source document and cycle information. 


## Getting Started

Just include as a normal library:

```
<script src='finScript.js'></script>
```

## Workflows

Workflows are used to model a "workflow" or "cycle" in the accounting process. Source Documents are added to the workflow which at 
the moment just holds them in an array. 

```
var workFlow  = new workFlow();

```


## SourceDocs

SourceDocs are a model for source documents in the accounting process such as invoices, receipts and goods received notes. In the future, I would like to add documents 
```
// "docProcess" is an array of all the processes the document must undertake in order for it to be "completed" 
//e.g. send to accounting department, get authorised by production manager.
var docProcess =  [
				{
				completed: false,
				target: 'Finance Manager',
				type: "auth"
				},
				{
				completed: true,
				target: 'Accounting Department',
				type: "send"
				}	
			
			];
		
		// "date" is a date stamp for the document
		var date = 20170630;

		// "name" is an arbritrary identifier for the source document
		var	name = 'Receipt0102';

		// "lines" is an array of the items on the source document
		var lines = [
				{qty:1, desc:'Milk', total:20},
				{qty:1, desc:'Bread', total:11}
			];

		// "sender" and 'receiver' are both strings holding the names of the receiver and sender
		var sender = 'ShopName';
		var receiver = 'us';

		// "type" is the a type identifier for the source document such as receipt, invoice or goods received note
		var type  = 'Receipt'


		//create object

		var testReceipt = new SourceDoc(name, receiver, sender, date, lines, type, docProcess);

```


and then you can add the document to the workflow:

```
var workFlow  = new workFlow();

workFlow.addDoc(testReceipt);

```


#Contributions

If you feel like there is something that you can add to this basic framework I have given here, please feel free to do so!
