function calcWordFrequencies() {
    let read = prompt("read a list of words");
    let list = read.trim().split(" ");

    let result = new Map();
    
    if(list.length == null){
        return 0;
    }
    

    for(let i = 0; i < list.length; i++){
        let temp = list[i];

        if(result.has(temp)){
            let count = result.get(temp);
            result.set(temp, count + 1);
        }
        else{
            result.set(temp, 1);
        }
    }

    function print(key, val){
        console.log(val + " " + key);
    }

    result.forEach(print);


}