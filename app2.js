const stuff = {
    errorMessage: document.getElementById("ErrorMessage"),
    loginPagebtn: document.getElementById("loginPageButton"),
    logoutbtn: document.getElementById("logout"),
    loginToken: cookies.get("loginToken"),
    firstColor: document.getElementById("1"),
    secondColor: document.getElementById("2"),
    thirdColor: document.getElementById("3"),
    fourthColor: document.getElementById("4"),
    fifthColor: document.getElementById("5"),
    sixthColor: document.getElementById("6"),
    firstColordate: document.getElementById("1date"),
    secondColordate: document.getElementById("2date"),
    thirdColordate: document.getElementById("3date"),
    fourthColordate: document.getElementById("4date"),
    fifthColordate: document.getElementById("5date"),
    sixthColordate: document.getElementById("6date"),
    firstColorname: document.getElementById("1name"),
    secondColorname: document.getElementById("2name"),
    thirdColorname: document.getElementById("3name"),
    fourthColorname: document.getElementById("4name"),
    fifthColorname: document.getElementById("5name"),
    sixthColorname: document.getElementById("6name")
}

if (loginToken = null) {
    errorMessage.innerText = "No one is logged in";
    loginPagebtn.style.left = "100%";
}

data.logoutbtn.addEventListener("click", () => {
    cookies.remove("loginToken");
    location.href = 'index.html';
})

axios.request({
    url: "https://reqres.in/api/unknown",
    method: "GET"
}).then((response) => {
    console.log(response);

    firstColorname.innerHTML = response.data[0].name;
    secondColorname.innerHTML = response.data[1].name;
    thirdColorname.innerHTML = response.data[2].name;
    fourthColorname.innerHTML = response.data[3].name;
    fifthColorname.innerHTML = response.data[4].name;
    sixthColorname.innerHTML = response.data[5].name;

    firstColordate.innerHTML = response.data[0].year;
    secondColordate.innerHTML = response.data[1].year;
    thirdColordate.innerHTML = response.data[2].year;
    fourthColordate.innerHTML = response.data[3].year;
    fifthColordate.innerHTML = response.data[4].year;
    sixthColordate.innerHTML = response.data[5].year;

    firstColor.style.backgroundColor = response.data[0].color;
    secondtColor.style.backgroundColor = response.data[1].color;
    thirdColor.style.backgroundColor = response.data[2].color;
    fourthColor.style.backgroundColor = response.data[3].color;
    fifthColor.style.backgroundColor = response.data[4].color;
    sixthColor.style.backgroundColor = response.data[5].color;

}).catch((error) => {
    console.log(error);
});