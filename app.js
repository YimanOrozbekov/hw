
//  HW_3.1  //

for(var i = 0; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log('fizzBuzz')
    } else if (i % 5 === 0) {
        console.log('fizz')
    } else if (i % 3 === 0) {
        console.log('fizz')
    } else {
        console.log(i)
    }
}

//HW_3.2

var milkAndBeer = ['milk', 'beer', 'beer', 'milk', 'milk']
var bad = ['beer']
for (var i = 0; i < milkAndBeer.length; i++){
    if(bad.includes(milkAndBeer[i].toLowerCase())){
        console.log(`${milkAndBeer[i]} BAD`)
        continue
    }

    console.log(`${milkAndBeer[i]} GOOD`)
}
