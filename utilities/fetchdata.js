export const BASE_URL = "https://real-time-product-search.p.rapidapi.com/search";
 export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7fdb904416msh4dc4281a8455929p1e4d1ejsnea807bb4d77c',
		'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
	}
};

export const fetchdata = async () => {
  const data = await fetch(`https://real-time-product-search.p.rapidapi.com/search?q=Nike%20shoes&country=us&language=en`, options);
  const datajson = await data.json();
  return datajson.data

}
