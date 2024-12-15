const urlParams = new URLSearchParams(window.location.search);
const sailor = urlParams.get('sailor');
const sailorNameElement = document.getElementById('sailor-name');
const sailorDescriptionElement = document.getElementById('sailor-description');

const sailorDescriptions = {
    Venus: "You are Sailor Venus! You embody love and beauty.",
    Mars: "You are Sailor Mars! You are courageous and passionate.",
    Mercury: "You are Sailor Mercury! You are intelligent and quick-witted.",
    Moon: "You are Sailor Moon! You value friendship and harmony.",
    Jupiter: "You are Sailor Jupiter! You are strong and just."
};

const resultDiv = document.getElementById('result-container');

if(sailor == 'Venus'){
    resultDiv.style.backgroundColor = "#ffbb00";
    resultDiv.style.boxShadow = "0 0 0 4px #FFD700, 0 0 0 7px #DAA520, inset 0 0 0 4px #E6C200, inset 0 0 0 7px #EEE8AA, 0 0 0 10px #B8860B";
}
else if(sailor == 'Moon'){
    resultDiv.style.backgroundColor = "#ff69b4";
    resultDiv.style.boxShadow = "0 0 0 4px #d5006d, 0 0 0 7px #e312b2, inset 0 0 0 4px #dc143c, inset 0 0 0 7px #ff1493, 0 0 0 10px #d5006d";
}
else if(sailor == 'Mercury'){
    resultDiv.style.backgroundColor = "#35c4f8";
    resultDiv.style.boxShadow = "0 0 0 4px #008B8B, 0 0 0 7px #1E90FF, inset 0 0 0 4px #4682B4, inset 0 0 0 7px #46e3e3, 0 0 0 10px #1babab";
}
else if(sailor == 'Jupiter'){
    resultDiv.style.backgroundColor = "#39cb67";
    resultDiv.style.boxShadow = "0 0 0 4px #006400, 0 0 0 7px #3CB371, inset 0 0 0 4px #228B22, inset 0 0 0 7px #2E8B57, 0 0 0 10px #008080";
}
else if(sailor == 'Mars'){
    resultDiv.style.backgroundColor = "#f24b4b";
    resultDiv.style.boxShadow = "0 0 0 4px #8B0000, 0 0 0 7px #800000, inset 0 0 0 4px #CD5C5C, inset 0 0 0 7px #B22222, 0 0 0 10px #DC143C";
}

sailorNameElement.textContent = `${sailor}!`;
sailorDescriptionElement.textContent = sailorDescriptions[sailor] || "You are a unique Sailor Guardian!";