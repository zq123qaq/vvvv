var arr=[21,52,33,62,22,93,35,57,354,245];
　　　　　　　//创建每次循环存储最大值得变量
            var max;
　　　　　　　//遍历数组，默认arr中的某一个元素为最大值，进行逐一比较
            for(var i=0; i<arr.length; i++){
　　　　　　　　　　//外层循环一次，就拿arr[i] 和 内层循环arr.legend次的 arr[j] 做对比
                for(var j=i; j<arr.length; j++){
                    if(arr[i]<arr[j]){
                        //如果arr[j]大就把此时的值赋值给最大值变量max
　　　　　　　　　　　　　　 max=arr[j];
                        arr[j]=arr[i];
                        arr[i]=max;
                    }
                }
            }
            document.write(arr.toString()+"<br>"); 