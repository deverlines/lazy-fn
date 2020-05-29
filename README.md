Example

    console.log(1);

    lazyFn(function () {
        console.log(2);
    });

    console.log(3);
    
    //1
    //3
    //2