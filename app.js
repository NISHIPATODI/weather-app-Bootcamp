window.addEventListener('load',()=>{
    let long;
    let lat;
    let temperatureDescription= document.querySelector(".temperature-description");
    let temperatureDegree= document.querySelector(".temperature-degree");
    let locationTimezone= document.querySelector(".location-timezone");
   let icon= document.querySelector(".icon");
   let temperatureSection= document.querySelector(".degree-section");
   const temperatureSpan= document.querySelector(".span");
   const c= document.querySelector(".c");
   const f= document.querySelector(".f")
   
   
    if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(position=>{
    long= position.coords.longitude;
    //long=75.233582;//bdnwr long
   // long=75.833;// indore long
   lat= position.coords.latitude;
  lat= 23.020788;//bdnwr lat
  //lat= 22.718; //indore lat
   const YOUR_API_KEY="3f708dab75cc2145a1461c138592ee42";

  //  const proxy=``;
  const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3f708dab75cc2145a1461c138592ee42`;
 
 //const api=`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=22.9734229&lon=78.6568942&appid=3f708dab75cc2145a1461c138592ee42`;
  // const api=`api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3f708dab75cc2145a1461c138592ee42`;
   
   console.log(position);

   fetch(api)
.then(response=>{
    return response.json();
})
.then(data=>{
    console.log(data);

    // to fetch current temperature from json
const {temp} = data.main;
console.log(`current temperature is ${temp}`);
temperatureDegree.textContent= (1.8*(temp- 273) + 32).toFixed(2);

//to fetch description
const {description} = data.weather[0];

temperatureDescription.textContent= description;
console.log(`current description is ${description}`);

// to fetch timezone or location
//locationTimezone.textContent= data.name;
const{name}=data;
locationTimezone.textContent= name;

// to fetch icon 
const{icon}=data.weather[0];
icon.innerHTML=`<img src="icons/${icon}.png">`;
console.log(icon);
    //return response.json();

//change temperature into celsius/feherenite

c.addEventListener('click',()=>{
    if(temperatureSpan.textContent==="F"){
        //let celsius= (temp-32)*5/9;
        let celsius=(temp-273).toFixed(2);
        temperatureDegree.textContent= celsius;

        temperatureSpan.innerHTML=`C`;
    }
    else{
        temperatureDegree.textContent= (1.8*(temp- 273) + 32).toFixed(2);

        temperatureSpan.textContent="F";
    
    }
})
f.addEventListener('click',()=>{
    if(temperatureSpan.textContent==="C"){
        temperatureDegree.textContent= (1.8*(temp- 273) + 32).toFixed(2);

        temperatureSpan.textContent="F";
    
    }
    else{
        temperatureDegree.textContent= (1.8*(temp- 273) + 32).toFixed(2);

        temperatureSpan.textContent="F";
    
    }
})



})


});
    }
   
})
