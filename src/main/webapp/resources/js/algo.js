var series={
		arithmetic : (s, e)=>{
			var start = s*1;
			var end = e*1;
			var sum=0;
			
			for(var i=start;i<=end;i++){
				sum = sum + i;
			}
			return sum;
		},
		
		switchSeries : ()=>{
			var i=0, sum=0, sw=0;
	        
	        do {
	           if(sw==0){
	              sum=sum+i;
	              sw=1;
	           }else {
	              sum=sum-i;
	              sw=0;
	           }
	           i=i+1;
	           
	        }while(i<100);
	        
	        return sum;
		},
		
		diffSeries : x=>{
			var sum=0, seq=0;
			for(var i=1; i<=(x*1); i++){
				if(i==1){
					seq = i;
				}else{
					seq = seq+i;
				}
				sum += seq;
			}
			
			return sum;
		},
		
		factorial : (s,e)=>{
			var sum=0;
			var start = s*1;
			var end = e*1;
			
			for(var i=start; i<=end; i++){
				var fac=1;
				for(var j=start; j<=i; j++){
					fac = fac * j;
				}
				sum += fac;
			}
			return sum;
		},
		
		fibonacci : (s,e)=>{
			var fir=1, sec=1, thir=0;
			var sum = fir + sec;
			var start = s*1;
			var end = e*1;
			
			for(var i=start+2; i<=end; i++){
				thir = fir + sec;
				sum += thir;
				fir = sec;
				sec = thir;
			}
			return sum;
		}
}