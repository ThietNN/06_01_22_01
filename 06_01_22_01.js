function run(){
    let x = parseInt(document.getElementById("a"))
    let y = parseInt(document.getElementById("b"))

    if ( x % y === 0){
        document.write("a chia hết cho b");
    }
    else {
        document.write("a không chia hết cho b");
    }
}

