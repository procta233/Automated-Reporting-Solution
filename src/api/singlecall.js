export const fetchGetApi = async (API) => {

 try {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  const response = await fetch(API, requestOptions);
    if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const result = await response.json();
  // console.log("result",result);
  return result;
  
} catch (error) {
  console.log('error', error);
}
  };


export const fetchPostApi =async(API,BODYDATA)=>{
  try{
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(
BODYDATA
);
console.log("BODYDATA",BODYDATA);
console.log("RAW",raw);
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

const response = await fetch(API, requestOptions)
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
 const result = await response.json();
 return result;
  }
  catch (error) {
  throw error;
}
  
}


  