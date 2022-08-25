
function removeSpaceArrayNumber(){
    for (let i = 0; i < 9; i++) {
        array_number[i]=array_number[i].replaceAll(" ", "")
    }
    return array_number
}

function checkAllNumbers(A){
    for (let i = 0; i < 9; i++) 
    {
        for (let j = 0; j < 9; j++) 
        {
            let result = ((A[i][j]).toString()).match(/[1-9]/g)
            if (result == null){
                return false
            }

        }
    }
    return true
}

function checkAllDifferent(A){
    result = {
        wrongRow : [],
        rowNumber : -1
    }
    for (let i = 0; i < 9; i++) 
    {
        let rowNumberList = [] 
        for (let j = 0; j < 9; j++) 
        {
            if (rowNumberList.includes(A[i][j]))
            {
                console.log("Wrong number: "+A[i][j]+" in position: ["+i+"]["+j+"]")
                for(let k = 0; k < 9; k++)
                {
                    result.wrongRow.push(A[i][k])
                }
                result.rowNumber = i+1
                return result
            }
            else
            {
                rowNumberList.push(A[i][j])
            }
            
        }
    }

    return result
}

function F21(A){
    // A = 9x9 Array
    allNumbers = checkAllNumbers(A)
    if(allNumbers === false)
        return false
    allDifferent = checkAllDifferent(A)
    // console.log(allDifferent.length)
    // if (allDifferent === false)
    //     return false
    return allDifferent
}



array_number = removeSpaceArrayNumber()

//result = F21(array_number)
