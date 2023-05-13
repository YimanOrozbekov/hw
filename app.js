var starbucks = {
    drinks: {
        coffee:{
            latte: 'latte',
            cappuccino: 'cappuccino',
            americano: 'americano',
            frappuccino: 'frappuccino'
        },
        tea: {
            black: 'black',
            green: 'green'
        }
    }
}
var drinks = prompt('Выберите напиток : из кофе есть...')
if(drinks in starbucks.drinks.coffee || drinks in starbucks.drinks.tea){
    console.log('заказ принят')
}else{
    console.log('такого напитка нет')
}
