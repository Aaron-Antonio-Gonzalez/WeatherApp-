var cityname = 'laredo'
var apikey = '0999012505c70063fa49b0065ca2b4d3'



$('#search-value').val()
$('#search-button').on('click', function(){
    var value = $('#search-value').val()
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=0999012505c70063fa49b0065ca2b4d3`
    var city = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=0999012505c70063fa49b0065ca2b4d3`
   
    
    
    
    
    fetch(url)
    
    .then(function (response) {
        if (!response.ok){
            throw response.json();
        }
        return response.json();
    }).then (function (response){
        var lon = response.coord.lon;
        var lat = response.coord.lat;
        console.log(lon)
        console.log(response)
        $('#current-weather').html(`<div></div>`)
        $('#current-weather').append(`
        <div>${response.name}</div>
        `)
        $('.degrees').html(`<div></div>`)
        $('.degrees').append(`
        <div>${response.main.temp}</div>
        `)
        
        
        var url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,alerts,minuetly&appid=0999012505c70063fa49b0065ca2b4d3`
        
        fetch(url2)
        .then(function (response) {
            if(!response.ok){
                throw response.json();
            }
            return response.json();
        })
        .then(function (response){
            console.log(response)
        })
    })
    
})



//uv index 
//one call