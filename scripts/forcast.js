const key = '5lEPA6SZ5TCna8E7OBJ0SMAGrJXV2eGY';

const getCity = async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`

  const response = await response = await fetch(location + query,{mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*"}});
  const data = await response.json();

  console.log(data);
};

getCity('Kansas');
