/*
let ABC = 
{
  email: 'lovef2e@hexschool.com',
  password: '12345678'
}

axios.post('https://escape-room.hexschool.io/api/user/signup',ABC)      
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });*/

/*
    let obj = 
        {Company_ID: "EightWay"}
      

      
axios.post('http://192.168.1.237:8022/QuickerOrder/CateList?Company_ID=EightWay') 

.then(function (response) {
 console.log(response);
 })
.catch(function (error) {
  console.log(error);
  });

/*
 axios({
    method: 'post',
    baseURL: 'http://192.168.1.237:8022/QuickerOrder/CateList?Company_ID=EightWay','Content-Type':'application/json',
  })
    .then((result) => { console.log(result.data) })
    .catch((err) => { console.error(err) })*/





    axios.post('https://cors-anywhere.herokuapp.com/http://192.168.1.237:8022/QuickerOrder/CateList?Company_ID=EightWay', {
        headers: { 'Access-Control-Allow-Origin':'*' }
    })
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
    
    