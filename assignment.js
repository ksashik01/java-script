



   // Problem 2: Finding even or odd//
    
   function evenOdd(str){
    if (typeof str != 'string' ){
    return 'Please Enter String ';
    }else if (str.length % 2 == 0){
    return 'even';
    }else{
    return 'odd';
    }
    }

    // Problem 4: Finding Bad data


function findingBadData (numbers){

        const badData= [];
        

        for (var i=0; i<numbers.length ; i++ ) {

        const index = i;
        const element = numbers [index];
    
        if (element%2!==0){
        badData.push (element);
        }  
        else {
    console.log ('Good Data')
    }

    }
    return badData;
    }
    myNumbers =[40, 42, 35, 30, 60,99]


    const badData = findingBadData(myNumbers);



 
