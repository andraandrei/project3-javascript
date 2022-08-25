
function removeSpaceArrayNumber(){
    for (let i = 0; i < 9; i++) {
        array_number[i]=array_number[i].replaceAll(" ", "")
    }
    return array_number
}

function checkColumnDifferent(A){

    resultColumn = {

        wrongColumn : [],
        columnNumber : -1
    }
    for (let i = 0; i < 9; i++) 
    {
        let columnNumberList = [] 
        for (let j = 0; j < 9; j++) 
        {
            if (columnNumberList.includes(A[j][i]))
            {
                console.log("Wrong number: "+A[j][i]+" in position: ["+j+"]["+i+"]")
                for(let k = 0; k < 9; k++)
                {
                    resultColumn.wrongColumn.push(A[k][j])
                }
                resultColumn.columnNumber = i+1
                console.log(resultColumn)
                return resultColumn
            }
            else
            {
                columnNumberList.push(A[j][i])
            }
            
        }
    }

    return resultColumn
}

function checkRegionDifferent(A){
    let i = 0;
    let j = 0;

    resultRegion = {
        wrongRegion : [],
        regionNumber : -1
    }

    //region 1
    regionNumberList = []
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++)
        {
            if (regionNumberList.includes(A[j][i]))
            {
                console.log("Wrong number: "+A[j][i]+" in position: ["+i+"]["+j+"]")
                for(let k = 0; k < 3; k++)
                {
                    for(let l=0; l < 3; l++){
                        resultRegion.wrongRegion.push(A[k][l])
                    }
                        
                }
                resultRegion.regionNumber=1;
                return resultRegion
            }
            else
            {
                regionNumberList.push(A[j][i])
            }
        }
    }
    

    //region 2
    regionNumberList = []
    for (let i = 0; i < 3; i++) {
        for (let j = 3; j < 6; j++)
        {
            if (regionNumberList.includes(A[j][i]))
            {
                console.log("Wrong number: "+A[j][i]+" in position: ["+i+"]["+j+"]")
                for(let k = 0; k < 3; k++)
                {
                    for(let l=3; l < 6; l++){
                        resultRegion.wrongRegion.push(A[k][l])
                    }
                        
                }
                resultRegion.regionNumber=2;
                return resultRegion
            }
            else
            {
                regionNumberList.push(A[j][i])
            }
        }
    }

    //region 3
    regionNumberList = []
    for (let i = 0; i < 3; i++) {
        for (let j = 6; j < 9; j++)
        {
            if (regionNumberList.includes(A[j][i]))
            {
                console.log("Wrong number: "+A[j][i]+" in position: ["+i+"]["+j+"]")
                for(let k = 0; k < 3; k++)
                {
                    for(let l=6; l < 9; l++){
                        resultRegion.wrongRegion.push(A[k][l])
                    }
                        
                }
                resultRegion.regionNumber=3;
                return resultRegion
            }
            else
            {
                regionNumberList.push(A[j][i])
            }
        }
    }
    //region 4
    regionNumberList = []
    for (let i = 3; i < 6; i++) {
        for (let j = 0; j < 3; j++)
        {
            if (regionNumberList.includes(A[j][i]))
            {
                console.log("Wrong number: "+A[j][i]+" in position: ["+i+"]["+j+"]")
                for(let k = 3; k < 6; k++)
                {
                    for(let l=0; l < 3; l++){
                        resultRegion.wrongRegion.push(A[k][l])
                    }
                        
                }
                resultRegion.regionNumber=4;
                return resultRegion
            }
            else
            {
                regionNumberList.push(A[j][i])
            }
        }
    }
    //region 5
    regionNumberList = []
    for (let i = 3; i < 6; i++) {
        for (let j = 3; j < 6; j++)
        {
            if (regionNumberList.includes(A[j][i]))
            {
                console.log("Wrong number: "+A[j][i]+" in position: ["+i+"]["+j+"]")
                for(let k = 3; k < 6; k++)
                {
                    for(let l=3; l < 6; l++){
                        resultRegion.wrongRegion.push(A[k][l])
                    }
                        
                }
                resultRegion.regionNumber=5;
                return resultRegion
            }
            else
            {
                regionNumberList.push(A[j][i])
            }
        }
    }

    //region 6
    regionNumberList = []
    for (let i = 3; i < 6; i++) {
        for (let j = 6; j < 9; j++)
        {
            if (regionNumberList.includes(A[j][i]))
            {
                console.log("Wrong number: "+A[j][i]+" in position: ["+i+"]["+j+"]")
                for(let k = 3; k < 6; k++)
                {
                    for(let l=6; l < 9; l++){
                        resultRegion.wrongRegion.push(A[k][l])
                    }
                        
                }
                resultRegion.regionNumber=6;
                return resultRegion
            }
            else
            {
                regionNumberList.push(A[j][i])
            }
        }
    }

    //region 7
    regionNumberList = []
    for (let i = 6; i < 9; i++) {
        for (let j = 0; j < 3; j++)
        {
            if (regionNumberList.includes(A[j][i]))
            {
                console.log("Wrong number: "+A[j][i]+" in position: ["+i+"]["+j+"]")
                for(let k = 6; k < 9; k++)
                {
                    for(let l=0; l < 3; l++){
                        resultRegion.wrongRegion.push(A[k][l])
                    }
                        
                }
                resultRegion.regionNumber=7;
                return resultRegion
            }
            else
            {
                regionNumberList.push(A[j][i])
            }
        }
    }

    //region 8
    regionNumberList = []
    for (let i = 6; i < 9; i++) {
        for (let j = 3; j < 6; j++)
        {
            if (regionNumberList.includes(A[j][i]))
            {
                console.log("Wrong number: "+A[j][i]+" in position: ["+i+"]["+j+"]")
                for(let k = 6; k < 9; k++)
                {
                    for(let l=3; l < 6; l++){
                        resultRegion.wrongRegion.push(A[k][l])
                    }
                        
                }
                resultRegion.regionNumber=8;
                return resultRegion
            }
            else
            {
                regionNumberList.push(A[j][i])
            }
        }
    }

    //region 9
    regionNumberList = []
    for (let i = 6; i < 9; i++) {
        for (let j = 6; j < 9; j++)
        {
            if (regionNumberList.includes(A[j][i]))
            {
                console.log("Wrong number: "+A[j][i]+" in position: ["+i+"]["+j+"]")
                for(let k = 6; k < 9; k++)
                {
                    for(let l=6; l < 9; l++){
                        resultRegion.wrongRegion.push(A[k][l])
                    }
                        
                }
                resultRegion.regionNumber=9;
                return resultRegion
            }
            else
            {
                regionNumberList.push(A[j][i])
                console.log(regionNumberList)
            }
        }
    }

    //region 
    regionNumberList = []
    for (let i = 6; i < 9; i++) {
        for (let j = 6; j < 9; j++)
        {
            if (regionNumberList.includes(A[j][i]))
            {
                console.log("Wrong number: "+A[j][i]+" in position: ["+i+"]["+j+"]")
                for(let k = 6; k < 9; k++)
                {
                    for(let l=6; l < 9; l++){
                        resultRegion.wrongRegion.push(A[k][l])
                    }
                        
                }
                resultRegion.regionNumber=9;
                return resultRegion
            }
            else
            {
                regionNumberList.push(A[j][i])
                console.log(regionNumberList)
            }
        }
    }


    return resultRegion
}

function F31(A){
    checkRows = F21(A) 
    // if(checkRows === false)
    //     return false
    return checkRows
}

function F32(A){
    allDifferent = checkColumnDifferent(A)
    // if (allDifferent === false)
    //     return false
    return allDifferent
}

function F33(A){
    allDifferent = checkRegionDifferent(A)
    // if (allDifferent === false)
    //     return false
    return allDifferent
}



array_number = removeSpaceArrayNumber()

//result = F33(array_number)

resultF31 = F31(array_number)
resultF32 = F32(array_number)
resultF33 = F33(array_number)
var table = document.getElementById("result");
console.log(resultF31)
console.log(resultF32)
console.log(resultF33)
if((resultF31.rowNumber == -1) && (resultF32.columnNumber == -1) && (resultF33.regionNumber == -1) ) 
{
    const el = document.getElementById("results");
    el.textContent = 'The table is correct';
    document.body.appendChild(el);
}
else
{
    var table = document.getElementById("results");
    for (let i = 0; i < 3; i++) {
        var row = document.createElement("tr");
        for (let j = 0; j < 10; j++) {
            if(i==0){
                if(j==0)
                {
                    var cell = document.createElement("td");
                    var cellContents = document.createTextNode("Line "+resultF31.rowNumber+ " incorrect");
                    cell.appendChild(cellContents);
                    row.appendChild(cell);
                }
                if (j<9)
                {
                    var cell = document.createElement("td");
                    var cellContents = document.createTextNode(resultF31.wrongRow[j]);
                    cell.appendChild(cellContents);
                    row.appendChild(cell);
                }
            }
            else if(i==1)
            {
                if(j==0)
                {
                    var cell = document.createElement("td");
                    var cellContents = document.createTextNode("Column "+resultF32.columnNumber+ " incorrect");
                    cell.appendChild(cellContents);
                    row.appendChild(cell);
                }
                if (j<9)
                {
                    var cell = document.createElement("td");
                    var cellContents = document.createTextNode(resultF32.wrongColumn[j]);
                    cell.appendChild(cellContents);
                    row.appendChild(cell);
                }
            }
            else if(i==2)
            {
                if(j==0)
                {
                    var cell = document.createElement("td");
                    var cellContents = document.createTextNode("Region "+resultF33.regionNumber+ " incorrect");
                    cell.appendChild(cellContents);
                    row.appendChild(cell);
                }
                if (j<9)
                {
                    var cell = document.createElement("td");
                    var cellContents = document.createTextNode(resultF33.wrongRegion[j]);
                    cell.appendChild(cellContents);
                    row.appendChild(cell);
                }
            }
        }          
        
        table.appendChild(row);
    }
    
}

