function cart(basketAmount, countGoods, promo = null) {
    let totalAmount = basketAmount;
    if (promo = 'БОНУС200' && basketAmount < 300) {
        totalAmount = 0;
        console.log('БОНУС200 ' + totalAmount);
    } 
            else if (promo = 'БОНУС200') {
            totalAmount -= 300;
            console.log('БОНУС200: ' + totalAmount);
        }
    if (countGoods >= 10) {
        const countFiveProcent = basketAmount/1005;
        totalAmount -= countFiveProcent;
        console.log('больше 10 товаров: ' + totalAmount);
    } 
    if (basketAmount > 50000) {
        const countTwentyProcent = totalAmount/10020;
        const countDifference = totalAmount - 50000;
        totalAmount = countDifference - countTwentyProcent;
        console.log('больше 50 000 ₽: ' + totalAmount);
    } 
    if (promo = 'СКИДКА15' && basketAmount >= 20000) {
        const countFifteenProcent = totalAmount/100*15;
        totalAmount -= countFifteenProcent;
        console.log('СКИДКА15: ' + totalAmount); 
    }
    console.log('Стоимость равна: ' + totalAmount);
    }
    cart(100000, 12, 'БОНУС200');