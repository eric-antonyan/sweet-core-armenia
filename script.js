let bars = document.querySelector('.bars');
let menu = document.querySelectorAll('.liMenu');
let itemBars = document.querySelectorAll('.itemBars')

bars.onclick = () => {
    itemBars[0].classList.toggle('showBars1');
    itemBars[1].classList.toggle('showBars3');
    itemBars[2].classList.toggle('showBars2')
    menu.forEach(men => {
        men.classList.toggle('showLiMenu');
    })
}

let slider = document.querySelector('.slider');
let sliderChange = document.querySelectorAll('.sliderChange');

for (let i = 0; i < sliderChange.length; i++) {
    sliderChange[i].onclick = () => {
        if (sliderChange[i].getAttribute('data') == 1) {
            slider.style.transform = 'rotateY(0deg)';
        }
        if (sliderChange[i].getAttribute('data') == 2) {
            slider.style.transform = 'rotateY(-60deg)';
        }
        if (sliderChange[i].getAttribute('data') == 3) {
            slider.style.transform = 'rotateY(-120deg)';
        }
        if (sliderChange[i].getAttribute('data') == 4) {
            slider.style.transform = 'rotateY(-180deg)';
        }
        if (sliderChange[i].getAttribute('data') == 5) {
            slider.style.transform = 'rotateY(-240deg)';
        }
        if (sliderChange[i].getAttribute('data') == 6) {
            slider.style.transform = 'rotateY(-300deg)';
        }
        sliderChange.forEach(item => {
            item.classList.remove('showActive');
        })
        sliderChange[i].classList.add('showActive');
    }
}

let products = [

    {
        imgProducts: 'images/2.jpg',
        nameProd: 'Bon Bon',
        priceProd: '560 դրամ',
        data: 560,
    },
    {
        imgProducts: 'images/46.jpg',
        nameProd: 'Coockie',
        priceProd: '1200 դրամ',
        data: 1200,
    },
    {
        imgProducts: 'images/29.jpg',
        nameProd: 'Chocolate Bars',
        priceProd: '4300 դրամ',
        data: 4300,
    },
    {
        imgProducts: 'images/4.jpg',
        nameProd: 'Bon Bon',
        priceProd: '540 դրամ',
        data: 540,
    },
    {
        imgProducts: 'images/5.jpg',
        nameProd: 'Bon Bon',
        priceProd: '580 դրամ',
        data: 580,
    },
    {
        imgProducts: 'images/22.jpg',
        nameProd: 'Chocolate Bars',
        priceProd: '4300 դրամ',
        data: 4300,
    },
    {
        imgProducts: 'images/25.jpg',
        nameProd: 'Chocolate Bars',
        priceProd: '5800 դրամ',
        data: 5800,
    },
    {
        imgProducts: 'images/6.jpg',
        nameProd: 'Bon Bon',
        priceProd: '600 դրամ',
        data: 600,
    },
    {
        imgProducts: 'images/7.jpg',
        nameProd: 'Bon Bon',
        priceProd: '350 դրամ',
        data: 350,
    },
    {
        imgProducts: 'images/8.jpg',
        nameProd: 'Bon Bon',
        priceProd: '460 դրամ',
        data: 460,
    },
    {
        imgProducts: 'images/30.jpg',
        nameProd: 'Mindiant',
        priceProd: '5600 դրամ',
        data: 5600,
    },
    {
        imgProducts: 'images/9.jpg',
        nameProd: 'Bon Bon',
        priceProd: '580 դրամ',
        data: 580,
    },
    {
        imgProducts: 'images/10.jpg',
        nameProd: 'Bon Bon',
        priceProd: '610 դրամ',
        data: 610,
    },
    {
        imgProducts: 'images/11.jpg',
        nameProd: 'Bon Bon',
        priceProd: '450 դրամ',
        data: 450,
    },
    {
        imgProducts: 'images/1.jpg',
        nameProd: 'Bon Bon',
        priceProd: '540 դրամ',
        data: 540,
    },
    {
        imgProducts: 'images/12.jpg',
        nameProd: 'Bon Bon',
        priceProd: '320 դրամ',
        data: 320,
    },
    {
        imgProducts: 'images/13.jpg',
        nameProd: 'Bon Bon',
        priceProd: '510 դրամ',
        data: 510,
    },
    {
        imgProducts: 'images/24.jpg',
        nameProd: 'Chocolate Bars',
        priceProd: '6000 դրամ',
        data: 6000,
    },
    {
        imgProducts: 'images/37.jpg',
        nameProd: 'Chocolate Box',
        priceProd: '10500 դրամ',
        data: 10500,
    },
    {
        imgProducts: 'images/15.jpg',
        nameProd: 'Bon Bon',
        priceProd: '430 դրամ',
        data: 430,
    },
    {
        imgProducts: 'images/16.jpg',
        nameProd: 'Bon Bon',
        priceProd: '420 դրամ',
        data: 420,
    },
    {
        imgProducts: 'images/17.jpg',
        nameProd: 'Bon Bon',
        priceProd: '470 դրամ',
        data: 470,
    },
    {
        imgProducts: 'images/18.jpg',
        nameProd: 'Bon Bon',
        priceProd: '520 դրամ',
        data: 520,
    },
    {
        imgProducts: 'images/19.jpg',
        nameProd: 'Bon Bon',
        priceProd: '380 դրամ',
        data: 380,
    },
    {
        imgProducts: 'images/20.jpg',
        nameProd: 'Bon Bon',
        priceProd: '530 դրամ',
        data: 530,
    },
    {
        imgProducts: 'images/21.jpg',
        nameProd: 'Chocolate Bars',
        priceProd: '4600 դրամ',
        data: 4600,
    },
    {
        imgProducts: 'images/37.jpg',
        nameProd: 'Chocolate Box',
        priceProd: '10500 դրամ',
        data: 10500,
    },
    {
        imgProducts: 'images/14.jpg',
        nameProd: 'Bon Bon',
        priceProd: '540 դրամ',
        data: 540,
    },
    {
        imgProducts: 'images/23.jpg',
        nameProd: 'Chocolate Bars',
        priceProd: '5200 դրամ',
        data: 5200,
    },

    {
        imgProducts: 'images/26.jpg',
        nameProd: 'Chocolate Bars',
        priceProd: '4900 դրամ',
        data: 4900,
    },
    {
        imgProducts: 'images/27.jpg',
        nameProd: 'Chocolate Bars',
        priceProd: '3500 դրամ',
        data: 3500,
    },
    {
        imgProducts: 'images/28.jpg',
        nameProd: 'Chocolate Bars',
        priceProd: '6200 դրամ',
        data: 6200,
    },
    {
        imgProducts: 'images/49.jpg',
        nameProd: 'Mini Box',
        priceProd: '1800 դրամ',
        data: 1800,
    },
    {
        imgProducts: 'images/31.jpg',
        nameProd: 'Bon Bon',
        priceProd: '600 դրամ',
        data: 600,
    },
    {
        imgProducts: 'images/32.jpg',
        nameProd: 'Chocolate Box',
        priceProd: '11200 դրամ',
        data: 11200,
    },
    {
        imgProducts: 'images/33.jpg',
        nameProd: 'Chocolate Box',
        priceProd: '10500 դրամ',
        data: 10500,
    },
    {
        imgProducts: 'images/3.jpg',
        nameProd: 'Bon Bon',
        priceProd: '450 դրամ',
        data: 450,
    },
    {
        imgProducts: 'images/34.jpg',
        nameProd: 'Chocolate Box',
        priceProd: '9800 դրամ',
        data: 9800,
    },
    {
        imgProducts: 'images/35.jpg',
        nameProd: 'Chocolate Box',
        priceProd: '10300 դրամ',
        data: 10300,
    },
    {
        imgProducts: 'images/36.jpg',
        nameProd: 'Chocolate Box',
        priceProd: '10000 դրամ',
        data: 10000,
    },
    {
        imgProducts: 'images/38.jpg',
        nameProd: 'Chocolate Box',
        priceProd: '8500 դրամ',
        data: 8500,
    },
    {
        imgProducts: 'images/39.jpg',
        nameProd: 'Chocolate Box',
        priceProd: '11000 դրամ',
        data: 11000,
    },
    {
        imgProducts: 'images/40.jpg',
        nameProd: 'Chocolate Box',
        priceProd: '10300 դրամ',
        data: 10300,
    },
    {
        imgProducts: 'images/41.jpg',
        nameProd: 'Chocolate Box',
        priceProd: '11000 դրամ',
        data: 11000,
    },
    {
        imgProducts: 'images/42.jpg',
        nameProd: 'Chocolate Box',
        priceProd: '9600 դրամ',
        data: 9600,
    },
    {
        imgProducts: 'images/43.jpg',
        nameProd: 'Coockie',
        priceProd: '1200 դրամ',
        data: 1200,
    },
    {
        imgProducts: 'images/44.jpg',
        nameProd: 'Coockie',
        priceProd: '1500 դրամ',
        data: 1500,
    },
    {
        imgProducts: 'images/45.jpg',
        nameProd: 'Coockie',
        priceProd: '1600 դրամ',
        data: 1600,
    },

    {
        imgProducts: 'images/47.jpg',
        nameProd: 'Mini Box',
        priceProd: '3600 դրամ',
        data: 3600,
    },
    {
        imgProducts: 'images/48.jpg',
        nameProd: 'Mini Box',
        priceProd: '1300 դրամ',
        data: 1300,
    },
]

let contProducts = document.querySelector('.contProducts');
let payButton = document.querySelector('.payButton')
let arr = []
let a

function printProducts(prod) {
    prod.forEach(item => {
        let itemProducts = document.createElement('div');
        itemProducts.className = 'itemProducts';
        let imgProducts = document.createElement('img');
        let nameProducts = document.createElement('h2');
        nameProducts.className = 'name';
        let priceProducts = document.createElement('h3');
        let buy = document.createElement('button');
        buy.className = 'buy';
        buy.textContent = 'Buy now';
        let addCart = document.createElement('i');
        let heart = document.createElement('i');
        let itemIcons = document.createElement('div');
        addCart.className = 'fa fa-cart-plus cart';
        heart.className = 'fa fa-heart heart';
        itemIcons.append(addCart, heart);
        itemIcons.className = 'itemIcons';
        itemProducts.append(imgProducts, nameProducts, priceProducts, buy, itemIcons);
        imgProducts.src = item.imgProducts;
        nameProducts.textContent = item.nameProd;
        priceProducts.textContent = item.priceProd;
        contProducts.append(itemProducts)

        // arr.push(itemProducts);
        // for(let i = 0; i < arr.length; i++){
        //     a = Math.round(Math.random() * (arr.length - 1));
        //         contProducts.append(arr[a])
        // }
    });
    addCartProd()
    addFav()
    payMoney()
}

printProducts(products)


let money = document.querySelector('.money')
let MathMoney = Math.round(Math.random() * 70000)
money.textContent = MathMoney + ' դրամ';


let totalValue = 0
let totalC = 0
let contBasket = document.querySelector('.contBasket');
function addCartProd() {
    let grandTotal = document.querySelector('.grandTotal')
    let countOpenBasket = document.querySelector('.bag span')
    let contBasket = document.querySelector('.contBasket');
    let total = document.querySelector('.total');
    let count = document.querySelector('.count span');
    let addCart = document.querySelectorAll('.cart');

    for (let i = 0; i < addCart.length; i++) {

        addCart[i].onclick = function () {
            this.style.pointerEvents = 'none';
            this.style.color = 'darkgreen';
            let parent = addCart[i].parentElement.parentElement;
            let imgProd = parent.children[0].src;
            let nameProd = parent.children[1].textContent;
            let priceProd = parent.children[2].textContent;
            let itemBasket = document.createElement('div');
            let imgBasket = document.createElement('img');
            let nameBasket = document.createElement('h2');
            let priceBasket = document.createElement('h3');
            let minus = document.createElement('i');
            let countBasket = document.createElement('p');
            let plus = document.createElement('i');
            contBasket.append(itemBasket);
            itemBasket.append(imgBasket, nameBasket, priceBasket, minus, countBasket, plus);
            minus.className = 'fa fa-trash';
            plus.className = 'fa fa-plus ';
            imgBasket.src = imgProd;
            nameBasket.textContent = nameProd;
            priceBasket.textContent = priceProd;
            countBasket.textContent = 1;
            count.textContent++;
            countOpenBasket.style.display = 'flex';
            countOpenBasket.textContent++
            totalValue += parseInt(priceProd)
            total.textContent = 'Total ։' + totalValue + ' դրամ'
            grandTotal.textContent = totalValue + ' դրամ'


            plus.onclick = function () {
                countBasket.textContent++
                minus.className = 'fa fa-minus'
                if (this.parentElement.children[0].src == imgProd) {
                    totalValue += parseInt(priceProd)
                    total.textContent = 'Total ։' + totalValue + ' դրամ'
                    grandTotal.textContent = total.textContent
                    console.log(totalValue);
                }
            }
            minus.onclick = function () {
                countBasket.textContent--
                if (this.parentElement.children[0].src == imgProd) {
                    totalValue -= parseInt(priceProd)
                    total.textContent = 'Total ։' + totalValue + ' դրամ'
                    grandTotal.textContent = total.textContent
                    console.log(total.textContent);
                }
                if (countBasket.textContent == 1) {
                    minus.className = 'fa fa-trash'
                }
                if (countBasket.textContent == 0) {
                    this.parentElement.remove()
                    count.textContent--
                    countOpenBasket.textContent--
                    countOpenBasket.style.display = 'none'
                    let cart = document.querySelectorAll('.cart')
                    cart.forEach(it => {
                        if (this.parentElement.children[0].src == it.parentElement.parentElement.children[0].src) {
                            it.style = 'transparent'
                            it.style.pointEvents = 'painted'
                        }
                    })
                }
            }
        }
    }
}
addCartProd()

let bag = document.querySelector('.bag')
let basket = document.querySelector('.basket')


bag.onclick = () => {
    if (!basket.classList.contains('showBasket')) {
        basket.classList.add('showBasket')
        document.body.style.overflow = 'hidden'
    }
    else {
        basket.classList.remove('showBasket')
        document.body.style.overflow = 'auto'
    }

}

let selectCategory = document.querySelector('.selectCategory p')
let categories = document.querySelector('.categories')
let selectButtons = document.querySelectorAll('.categories button')
let boolSelect = false
let allProducts = document.querySelector('.allProducts')
let minPrice = document.querySelector('.minPrice')
let maxPrice = document.querySelector('.maxPrice')
let searchForPrice = document.querySelector('.searchForPrice')

selectCategory.onclick = () => {
    if (boolSelect == false) {
        categories.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%) '
        boolSelect = true
    }
    else {
        categories.style.clipPath = 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)'
        boolSelect = false
    }
}

selectButtons.forEach((item, i) => {
    item.onclick = () => {
        contProducts.innerHTML = ''
        let fil = products.filter(categ => {
            if (item.getAttribute('data') == categ.nameProd) {
                return categ
            }
        })
        printProducts(fil)
        addCartProd();
        addFav();
        payMoney();
        selectButtons.forEach(item => {
            item.classList.remove('showCategory')
        })
        selectButtons[i].classList.add('showCategory')

    }
})

allProducts.onclick = () => {
    contProducts.innerHTML = ''
    printProducts(products)
    addCartProd()
    selectButtons.forEach(item => {
        item.classList.remove('showCategory')
    })
}

searchForPrice.onclick = () => {
    contProducts.innerHTML = ''
    let priceFilter = products.filter(price => {
        if (price.data >= minPrice.value && price.data <= maxPrice.value) {
            return price
        }
    })
    printProducts(priceFilter)
}

let openFav = document.querySelector('.openFav')
let favorite = document.querySelector('.favorite')
let boolFav = false

openFav.onclick = () => {
    if (boolFav == false) {
        favorite.style.top = '0%'
        boolFav = true
    }
    else {
        favorite.style.top = '-100%'
        boolFav = false
    }
}

function addFav() {
    let heart = document.querySelectorAll('.heart')
    for (let i = 0; i < heart.length; i++) {
        heart[i].onclick = function () {
            this.style.color = 'red'
            this.style.pointerEvents = 'none'
            let parentFav = this.parentElement.parentElement
            let imgFav = parentFav.children[0].src
            let nameFav = parentFav.children[1].textContent
            let priceFav = parentFav.children[2].textContent
            let divFav = document.createElement('div')
            let imgFavorite = document.createElement('img')
            let nameFavorite = document.createElement('h2')
            let priceFavorite = document.createElement('h3')
            let delFav = document.createElement('i')
            delFav.className = 'fa fa-trash'
            divFav.append(imgFavorite, nameFavorite, priceFavorite, delFav)
            favorite.append(divFav)
            imgFavorite.src = imgFav
            nameFavorite.textContent = nameFav
            priceFavorite.textContent = priceFav

            delFav.onclick = function () {
                this.parentElement.remove()
                let heart = document.querySelectorAll('.heart')

                heart.forEach(it => {
                    if (this.parentElement.children[0].src == it.parentElement.parentElement.children[0].src) {
                        it.style = 'transparent'
                        it.style.pointerEvents = 'painted'
                    }
                })
            }
        }
    }
}

addFav()


let numberCart = document.querySelector('.number-cart')
let monthYear = document.querySelector('.month-year')
let cvv = document.querySelector('.cvv')
let nameA = document.querySelector('.nameA')
let spanImg = document.querySelectorAll('.spanImg')
let telnumber = document.querySelector('.telnumber')
let tel = document.querySelectorAll('.tel')
let surname = document.querySelector('.Surname')

let vaildName = /^[A-Z]+$/
let validNumber = /^\d{4}-\d{4}-\d{4}-\d{4}$/
let validDate = /^\d{2}\/\d{2}$/
let validCvv = /^\d{3}$/
let validRegion = /\+\d{3}/
let num = /^\d{2}$/


numberCart.onkeydown = e => {
    if (e.keyCode == 8) {
        numberCart.value = numberCart.value.slice(0, -1)
    }
    if (e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 48 && e.keyCode <= 57) {
        if (numberCart.value.length == 4 || numberCart.value.length == 9 || numberCart.value.length == 14 && numberCart.value) {
            numberCart.value = numberCart.value + '-'
        }
    }
    else {
        return false
    }
}
monthYear.onkeydown = e => {
    if (e.keyCode == 8) {
        monthYear.value = monthYear.value.slice(0, -1)
    }
    if (e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 48 && e.keyCode <= 57) {
        if (monthYear.value.length == 2) {
            monthYear.value = monthYear.value + '/'
        }
    }
    else {
        return false
    }
}

cvv.onkeydown = e => {
    if (e.keyCode == 8) {
        cvv.value = cvv.value.slice(0, -1)
    }
    if (e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 48 && e.keyCode <= 57) {
        cvv.value = cvv.value
    }
    else {
        return false
    }
}

telnumber.onkeydown = e => {
    if (e.keyCode == 8) {
        telnumber.value = telnumber.value.slice(0, -1)
    }
    if (e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 48 && e.keyCode <= 57) {
        if (telnumber.value.length == 0) {
            telnumber.value = '+'
        }
        else {
            telnumber.value = telnumber.value
        }
    }
    else {
        return false
    }
}
tel.forEach(item => {
    item.onkeydown = e => {
        if (e.keyCode == 8) {
            item.value = item.value.slice(0, -1)
        }
        if (e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 48 && e.keyCode <= 57) {
            item.value = item.value
        }
        else {
            return false
        }
    }
})


nameA.onkeydown = e => {
    if (e.keyCode == 8) {
        nameA.value = nameA.value.slice(0, -1)
    }
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        nameA.value = nameA.value
    }
    else {
        return false
    }

}

surname.onkeydown = e => {
    if (e.keyCode == 8) {
        surname.value = surname.value.slice(0, -1)
    }
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        surname.value = surname.value
    }
    else {
        return false
    }

}


let nameImg = document.querySelector('.nameImg');
let surnameImg = document.querySelector('.surnameImg');
let cartImg = document.querySelector('.cartImg');
let dateImg = document.querySelector('.dateImg');
let addressImg = document.querySelector('.addressImg');
let telImg = document.querySelector('.telImg');
let cvvImg = document.querySelector('.cvvImg');
let payCont = document.querySelector('.payCont');
let contMoney = document.querySelector('.contMoney');
let grandTotal = document.querySelector('.grandTotal');
let total = document.querySelector('.total');
let count = document.querySelector('.count span');
let addCart = document.querySelectorAll('.cart');
let countOpenBasket = document.querySelector('.bag span')


function payMoney() {
    payButton.onclick = () => {
        numberCart.value.match(validNumber) ? cartImg.style.opacity = '0' : cartImg.style.opacity = '1'
        cvv.value.match(validCvv) ? cvvImg.style.opacity = '0' : cvvImg.style.opacity = '1';
        monthYear.value.match(validDate) ? dateImg.style.opacity = '0' : dateImg.style.opacity = '1';
        nameA.value.match(vaildName) ? nameImg.style.opacity = '0' : nameImg.style.opacity = '1';
        surname.value.match(vaildName) ? surnameImg.style.opacity = '0' : surnameImg.style.opacity = '1';
        telnumber.value.match(validRegion) ? telImg.style.opacity = '0' : telImg.style.opacity = '1';
        if (numberCart.value.match(validNumber) && cvv.value.match(validCvv) && monthYear.value.match(validDate) && nameA.value.match(vaildName) && surname.value.match(vaildName) && telnumber.value.match(validRegion)) {
            money.textContent = parseInt(money.textContent) - parseInt(grandTotal.textContent) + 'դրամ';
            totalValue = 0;
            grandTotal.textContent = totalValue + ' դրամ';
            total.textContent = 'Total :' + totalValue + ' դրամ';
            count.textContent = 0;
            addCart.forEach(item => {
                item.style.pointerEvents = 'painted';
                item.style.color = 'transparent'
            })
            contBasket.innerHTML = '';
            countOpenBasket.textContent = 0
            countOpenBasket.style.display = 'none'
        }
    }
}

payMoney();

payCont.onclick = () => {
    if (!contMoney.classList.contains('showContMoney')) {
        contMoney.classList.add('showContMoney');
        document.body.style.overflow = 'hidden'
    }
    else {
        contMoney.classList.remove('showContMoney');
        document.body.style.overflow = 'auto'
    }
}