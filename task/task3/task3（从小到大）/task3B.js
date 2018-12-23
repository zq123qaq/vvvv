var Arr=[21,52,33,62,22,93,35,57,354,245];
            var min;
            for(var i=0; i<Arr.length; i++){
                for(var j=i; j<Arr.length;j++){
                    if(Arr[i]>Arr[j]){
                      min=Arr[j];
                      Arr[j]=Arr[i];
                      Arr[i]=min;
                    }
                }
            }
            document.write(Arr.toString()+"<br />");