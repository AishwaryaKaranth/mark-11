import "./styles.css";

const form = document.querySelector(".form");
const birthday = document.querySelector(".birthday");
const luckyNumber = document.querySelector(".luckyNumber");

const isLuckyBirthday = (event) => {
  event.preventDefault();
  let birthdayInt = parseInt(birthday.value.replace(/-/g, ""));

  document.getElementById("loading-text").innerHTML = "crunching numbers...";
  document.getElementById("result-text").innerHTML = "";

  setTimeout(() => {
    let birthdayDigits = birthdayInt.toString().split("");

    let birthdaySum = birthdayDigits.reduce(
      (prev, current) => parseInt(prev) + parseInt(current),
      0
    );

    document.getElementById("loading-text").innerHTML = "";

    if (birthdaySum % luckyNumber.value === 0) {
      document.getElementById("result-text").innerHTML =
        "Congratulations! your birthday is lucky :)";
    } else {
      document.getElementById("result-text").innerHTML =
        "Sorry, your birthday is unlucky :(";
    }
  }, 2500);
};

const getFormValues = () => {
  form.addEventListener("submit", isLuckyBirthday);
};

getFormValues();
