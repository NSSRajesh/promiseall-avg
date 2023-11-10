let promise1=new Promise((resolve,reject)=>{
	isResult=true;
	if(isResult){
		resolve(30);
	}
	else{
		reject("error1")
	}
})

let promise2=new Promise((resolve,reject)=>{
	isResult=true;
	if(isResult){
		resolve(20);
	}
	else{
		reject("error2")
	}
})

let promise3=new Promise((resolve,reject)=>{
	isResult=true;
	if(isResult){
		resolve(10);
	}
	else{
		reject("error3")
	}
})

Promise.all([promise1,promise2,promise3])
.then((msg)=>{
	let c=0;
	for(m in msg){
		console.log(msg[m]);
		c=c+msg[m]; 
		d=c/3;
	}
	console.log(`sum : ${c}`);
	console.log(`average : ${d}`);
	
	
}).catch((err)=>{
	console.log(err)
})



