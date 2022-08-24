
function removeSpaceArrayNumber(){
    for (let i = 0; i < 9; i++) {
        array_number[i]=array_number[i].replaceAll(" ", "")
    }
    return array_number
}

function checkColumnDifferent(A){
    for (let i = 0; i < 9; i++) 
    {
        let columnNumberList = [] 
        for (let j = 0; j < 9; j++) 
        {
            if (columnNumberList.includes(A[j][i]))
            {
                console.log("Wrong number: "+A[j][i]+" in position: ["+i+"]["+j+"]")
                return false
            }
            else
            {
                columnNumberList.push(A[j][i])
            }
            
        }
    }

    return true
}

function checkRegionDifferent(A){
    let i = 0;
    let j = 0;

    regionNumberList = []
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++)
        {
            if (regionNumberList.includes(A[j][i]))
            {
                console.log("Wrong number: "+A[j][i]+" in position: ["+i+"]["+j+"]")
                return false
            }
            else
            {
                regionNumberList.push(A[j][i])
            }
        }
    }

    regionNumberList = []
    for (let i = 3; i < 5; i++) {
        for (let j = 3; j < 5; j++)
        {
            if (regionNumberList.includes(A[j][i]))
            {
                console.log("Wrong number: "+A[j][i]+" in position: ["+i+"]["+j+"]")
                return false
            }
            else
            {
                regionNumberList.push(A[j][i])
            }
        }
    }

    regionNumberList = []
    for (let i = 6; i < 8; i++) {
        for (let j = 6; j < 8; j++)
        {
            if (regionNumberList.includes(A[j][i]))
            {
                console.log("Wrong number: "+A[j][i]+" in position: ["+i+"]["+j+"]")
                return false
            }
            else
            {
                regionNumberList.push(A[j][i])
            }
        }
    }

    return true
}

function F31(A){
    checkRows = F21(A)
    if(checkRows === false)
        return false
    return true
}

function F32(A){
    allDifferent = checkColumnDifferent(A)
    if (allDifferent === false)
        return false
    return true
}

function F33(A){
    allDifferent = checkRegionDifferent(A)
    if (allDifferent === false)
        return false
    return true
}



array_number = removeSpaceArrayNumber()

result = F33(array_number)
if(F31(array_number) && F32(array_number) && F33(array_number))
    console.log("The table is correct")