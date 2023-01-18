let money = document.querySelector("#ocInput");
let btn = document.querySelector("#btn");
let oc = document.querySelector("#originCurrency");
let dc = document.querySelector("#destinyCurrency");
let result = document.querySelector(".result");

btn.addEventListener("click", () => {
  fromNone();
  fromCop();
  fromUsd();
  fromEur();
});

// Functions

const fromNone = () => {
  if (oc.value == "none" || dc.value == "none") {
    result.value = alert("Any currency was selected");
    window.location.reload();
  }
};

const fromCop = () => {
  if (oc.value == "cop" && dc.value == "cop") {
    result.value = money.value;
  } else if (oc.value == "cop" && dc.value == "eur") {
    result.value = (money.value * 0.00022).toFixed(2);
  } else if (oc.value == "cop" && dc.value == "usd") {
    result.value = (money.value * 0.00026).toFixed(2);
  }
};

const fromUsd = () => {
  if (oc.value == "usd" && dc.value == "cop") {
    result.value = (money.value * 3846.99).toFixed(2);
  } else if (oc.value == "usd" && dc.value == "eur") {
    result.value = (money.value * 0.84).toFixed(2);
  } else if (oc.value == "usd" && dc.value == "usd") {
    result.value = money.value;
  }
};

const fromEur = () => {
  if (oc.value == "eur" && dc.value == "cop") {
    result.value = (money.value * 4557.7).toFixed(2);
  } else if (oc.value == "eur" && dc.value == "eur") {
    result.value = money.value;
  } else if (oc.value == "eur" && dc.value == "usd") {
    result.value = (money.value * 1.18).toFixed(2);
  }
};
