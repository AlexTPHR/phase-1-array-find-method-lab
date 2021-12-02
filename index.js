function superbowlWin(win){
    let result = win.find(element => element.result === "W")
    
    return result ? result.year : undefined;}

    // if (result){
    //     return result.year;
    // }
    //         else {
    //             return undefined; 
    //     }
    // } Above is ternary and even better than my code however now I understand