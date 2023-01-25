function fibonacciGenerator (n) {
    var fibonacciSeries = [0,1];
    if(n === 0){
        return "Empty Series.";
    }
    else if(n === 1){
        fibonacciSeries.pop();
        return fibonacciSeries;
    }
    else if (n === 2){
        return fibonacciSeries;
    }
    else {
        for (var i = 2; i < n;i++){
            var newItem = fibonacciSeries[i-1]+fibonacciSeries[i-2];
            fibonacciSeries.push(newItem);
        }
        return fibonacciSeries;
    }
}
var output = fibonacciGenerator(14);
console.log(output);
