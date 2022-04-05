
const calTemp = ()=>{

    const temp = document.getElementById("temp").value;
    // console.log(temp);

    const tempSelected = document.getElementById("temp_diff");
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;
    // console.log(valueTemp);


   

    const celToFeh = (cel)=>{

        let rs= Math.round((cel * 1.8) + 32);
        return rs;

    };


    const fehToCel = (feh)=>{
        let f =Math.round((feh - 32) * 5/9) ;
        return f;
    };

    let result;

    if(valueTemp == 'cel'){
        result = celToFeh(temp);
        document.getElementById("resultContainer").innerHTML = ` = ${result} °Fahrenheit`;

    }else{

        result = fehToCel(temp);
        document.getElementById("resultContainer").innerHTML = ` = ${result} °Celsius`;

    }




};