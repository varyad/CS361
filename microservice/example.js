import fetch from 'node-fetch';

//example of how given sell price and buy price can use 
//the microservice API to calculate the margin and roi
async function Example(sellPrice, buyPrice) {

    //given sell price and buy price added to body of json object 
    const body = {sellPrice: sellPrice, buyPrice: buyPrice};

    //post call using the previously constructed json body
    const response = await fetch('http://localhost:8001/data', {
	    method: 'POST',
	    body: JSON.stringify(body),
	    headers: {'Content-Type': 'application/json'}
    });

    //the response is a json object with roi and margin in the body
    const data = await response.json();

    //can then extract the margin and roi from json body 
    console.log(data);

}
Example(200, 100);

