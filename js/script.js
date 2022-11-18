const submit = document.querySelector('.form__submit-button');
const reset = document.querySelector('.form__reset-button');
const inputs = document.querySelectorAll('.input__wrapper input');
const block = document.querySelector('.counter__result');
const maleSwitch = document.getElementById('gender-male');
const femaleSwitch = document.getElementById('gender-female');
const activityMinimal = document.getElementById('activity-minimal');
const caloriesNorm = document.getElementById('calories-norm');
const caloriesMinimal = document.getElementById('calories-minimal');
const caloriesMaximal = document.getElementById('calories-maximal');
const checkBoxes = document.querySelectorAll('.radio .radio__wrapper input');

const activateSubmit = function () {
    for (let input of inputs) {
        input.addEventListener('input', function (evt) {
            evt.preventDefault();
            submit.disabled = !(inputs[0].value.length > 0 && inputs[1].value.length > 0 && inputs[2].value.length > 0);
        });
    }
};

const activateReset = function () {
    for (let input of inputs) {
        input.addEventListener('input', function (evt) {
            evt.preventDefault();
            reset.disabled = !(inputs[0].value.length > 0 || inputs[1].value.length > 0 || inputs[2].value.length > 0);
        });
    }
};

const clickReset = function () {
    reset.addEventListener('click', function (evt) {
        evt.preventDefault();
        block.classList.add('counter__result--hidden');
        inputs[0].value = "";
        inputs[1].value = "";
        inputs[2].value = "";
        maleSwitch.checked = true;
        activityMinimal.checked = true;
        reset.disabled = true;
        submit.disabled = true;
    })
}

const clickSubmit = function () {
    submit.addEventListener('click', function (evt) {
        evt.preventDefault();
        block.classList.remove('counter__result--hidden');
    });
};



const counting = function () {
    submit.addEventListener('click', function () {
        let ages = Number(5) * Number(inputs[0].value);
        let heights = Number(6.25) * Number(inputs[1].value);
        let weights = Number(10) * Number(inputs[2].value);
        let N;
        if (maleSwitch.checked === true && femaleSwitch.checked === false) {
            N = weights + heights - ages + 5;
        } else {
            N = weights + heights - ages - 161;
        }
        if (checkBoxes[0].checked) {
            caloriesNorm.innerHTML = (Math.round(N * 1.2)).toString();
            caloriesMinimal.innerHTML = (Math.round((N * 1.2) - ((N * 1.2) / 100) * 15)).toString();
            caloriesMaximal.innerHTML = (Math.round((N * 1.2) + ((N * 1.2) / 100) * 15)).toString();
        } else if (checkBoxes[1].checked) {
            caloriesNorm.innerHTML = (Math.round(N * 1.375)).toString()
            caloriesMinimal.innerHTML = (Math.round((N * 1.375) - ((N * 1.375) / 100) * 15)).toString();
            caloriesMaximal.innerHTML = (Math.round((N * 1.375) + ((N * 1.375) / 100) * 15)).toString();
        } else if (checkBoxes[2].checked) {
            caloriesNorm.innerHTML = (Math.round(N * 1.55)).toString()
            caloriesMinimal.innerHTML = (Math.round((N * 1.55) - ((N * 1.55) / 100) * 15)).toString();
            caloriesMaximal.innerHTML = (Math.round((N * 1.55) + ((N * 1.55) / 100) * 15)).toString();
        } else if (checkBoxes[3].checked) {
            caloriesNorm.innerHTML = (Math.round(N * 1.725)).toString()
            caloriesMinimal.innerHTML = (Math.round((N * 1.725) - ((N * 1.725) / 100) * 15)).toString();
            caloriesMaximal.innerHTML = (Math.round((N * 1.725) + ((N * 1.725) / 100) * 15)).toString();
        } else if (checkBoxes[4].checked) {
            caloriesNorm.innerHTML = (Math.round(N * 1.9)).toString()
            caloriesMinimal.innerHTML = (Math.round((N * 1.9) - ((N * 1.9) / 100) * 15)).toString();
            caloriesMaximal.innerHTML = (Math.round((N * 1.9) + ((N * 1.9) / 100) * 15)).toString();
        }
    });
};


counting();
clickSubmit();
clickReset();
activateReset();
activateSubmit();



