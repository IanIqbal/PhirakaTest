function fibonacciTable(row, column){
    let array = []
    let numbers = [];
    let temp = 0
    for(let i = 0; i < row; i++){
        for (let j = 0; j < column; j++){
            
            if(numbers.length > 1){
                temp = numbers[numbers.length-1] + numbers[numbers.length-2]
                numbers.push(temp)
                array.push(temp)
            }else {
                numbers.push(temp)
                array.push(temp)
                temp++
            }
        }   
        
    }

    let table = []
    let tempTable = []
    for(let i = 0; i < array.length; i++){
       tempTable.push(array[i])

       if(tempTable.length == column){
        table.push(tempTable)
        tempTable = []
       }
    }


    

    return table
}


console.log(fibonacciTable(6, 6))
