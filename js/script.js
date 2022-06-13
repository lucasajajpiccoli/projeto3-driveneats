let namedish = "";
let namedrink = "";
let namedessert = "";
let valuedish = 0;
let valuedrink = 0;
let valuedessert = 0;
let totalvalue = 0;


function selectDish(element) {

    if (document.querySelector(".selecteddish") !== null) {
        document.querySelector(".selecteddish").classList.remove("selecteddish");
    }

    element.classList.add("selecteddish");

    checkButton ();

}

function selectDrink(element) {

    if (document.querySelector(".selecteddrink") !== null) {
        document.querySelector(".selecteddrink").classList.remove("selecteddrink");
    }

    element.classList.add("selecteddrink");

    checkButton ();

}

function selectDessert(element) {

    if (document.querySelector(".selecteddessert") !== null) {
        document.querySelector(".selecteddessert").classList.remove("selecteddessert");
    }

    element.classList.add("selecteddessert");

    checkButton ();

}

function checkButton () {
    if (document.querySelector(".selecteddish") !== null) {
        if (document.querySelector(".selecteddrink") !== null) {
            if (document.querySelector(".selecteddessert") !== null) {

                document.querySelector(".button").classList.add("hidden");
                document.querySelector(".buttonchecked").classList.remove("hidden");

            }
        }
    }
}

function confirmandcalculate () {
    document.querySelector(".transparentwhenconfirm").classList.add("oktransparent");
    document.querySelector(".confirmscreen").classList.remove("hiddenc");
    namedish = document.querySelector(".selecteddish .item div:nth-child(2)").innerHTML;
    namedrink = document.querySelector(".selecteddrink .item div:nth-child(2)").innerHTML;
    namedessert = document.querySelector(".selecteddessert .item div:nth-child(2)").innerHTML;
    valuedish = document.querySelector(".selecteddish .item div:nth-child(4)").innerHTML;
    valuedrink = document.querySelector(".selecteddrink .item div:nth-child(4)").innerHTML;
    valuedessert = document.querySelector(".selecteddessert .item div:nth-child(4)").innerHTML;
    totalvalue = Number(valuedish) + Number(valuedrink) + Number(valuedessert);

    document.querySelector(".dishscreen div:first-child").innerHTML = namedish;
    document.querySelector(".drinkscreen div:first-child").innerHTML = namedrink;
    document.querySelector(".dessertscreen div:first-child").innerHTML = namedessert;

    document.querySelector(".dishscreen div:last-child").innerHTML = valuedish;
    document.querySelector(".drinkscreen div:last-child").innerHTML = valuedrink;
    document.querySelector(".dessertscreen div:last-child").innerHTML = valuedessert;
    document.querySelector(".totalscreen div:last-child").innerHTML = `R$ ${totalvalue}`;


}