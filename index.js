

function superbowlWin(record){
    
    function findWin(record){
        return record.result === 'W'
    }
        return record.find(findWin).year;

}


function superbowlWin2(record){
    
    function findWin(record){
        return record.result === 'W'
    }
    if (findWin === true){
        return record.find(findWin).year;
    } else if (findWin !== true){
    return undefined
}
}
