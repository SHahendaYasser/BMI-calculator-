// Add JavaScript code for your web site here and call it from index.html.
let Height = document.getElementById("height_npt");
let Weight = document.getElementById("weight_npt");
let Submit = document.getElementById("sub_btn");
let result = document.getElementById("result");
let message = document.getElementById("message");
let Div_rslt = document.getElementById("result_div");
Submit.addEventListener("click", function(){
    let height = parseFloat(Height.value);
    let weight = parseFloat(Weight.value);
    if (isNaN(height)|| isNaN(weight)) {
        message.textContent = "Please, input your height and your weight."
        return;
    }
    else if (height < 1 || height > 2.5 || weight < 20 || weight > 200) {
        message.textContent = "Please, inter your right height and weight."
        return;
    }
    let BMI = weight/(height**2);
    result.textContent = `Your BMI is : ${BMI.toFixed(2)} .`;
    if (BMI < 18) {
        message.textContent = "You are so thin , you should visit doctor /!\.";
        Div_rslt.className = "results";
        Div_rslt.classList.add("thin-fat");
        return;
    }
    else if (BMI >= 18 && BMI <= 25) {
        message.textContent = "Your BMI is perfect, keep caring about your health ♡.";
        Div_rslt.className = "results";
        Div_rslt.classList.add("health");
        return;
    }
    else if (BMI >= 25 && BMI < 30) {
        message.textContent = "You are a little fat , just care more about your health.";
        Div_rslt.className = "results";
        Div_rslt.classList.add("little-fat");
        return;
    }
    else if (BMI > 30) {
        message.textContent = "You are so fat, you should visit doctor /!\.";
        Div_rslt.className = "results";
        Div_rslt.classList.add("thin-fat");
        return;
    }
    else {
        message.textContent = "I don't know what to do!";
        Div_rslt.className = "result";
        return;
    }
});
