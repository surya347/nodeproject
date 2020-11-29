const cityName= document.getElementById('cityname');
const submitBtn = document.getElementById('submitBtn');
const temp_real = document.getElementById("temp_real");
const temp_status = document.getElementById("temp_status");

const datahide = document.querySelector(".middle_layer");
const city_name= document.getElementById('city_name');

const getInfo= async(event)=>{
    event.preventDefault();
    
    let cityVal= cityName.value;
    
    if(cityVal === ""){
        city_name.innerText=`plz write city name before search`;
        datahide.classList.add('data_hide');
    }else{
        try{
            let url= `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=231389a78338c0dbfc8801e57e86a6d0`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData= [data];
            
            city_name.innerText= `${arrData[0].name} , ${arrData[0].sys.country}`;
            temp_real.innerText= arrData[0].main.temp;
           
         const   tempMood= arrData[0].weather[0].main;


            //condition to check weather condition

            if(tempMood== "Clear"){
                temp_status.innerHTML= "<i class='fas fa-sun' style ='color: #eccc68;'></i>";
             }
             else if(tempMood== "Clouds"){
                temp_status.innerHTML= "<i class='fas fa-cloud'></i>";
             }
             else if(tempMood== "Rain"){
                temp_status.innerHTML= "<i class='fas fa-cloud-showers-heavy' style ='color:blue;'></i>";
             }
             else{
                temp_status.innerHTML="<i class='fas fa-cloud-sun' style ='color: #eccc68;'></i>";
             }
             datahide.classList.remove('data_hide');
        }catch{
            city_name.innerText=`plz enter city name properly`;
            datahide.classList.add('data_hide');
        }
      
    }
}
submitBtn.addEventListener('click', getInfo);