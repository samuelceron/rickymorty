// Function definition and exportation
export const fetchData = url_api => {
    //return promise and promise definition
    return new Promise((resolve, reject) => {
      //instantiate connection
      const xhttp = new XMLHttpRequest();
      //open connection setting the method, route and if it´s asynchronous
      xhttp.open("GET", url_api, true);
      //call validation
      xhttp.onreadystatechange = () => {
        //state 4 shows it´s finished
        if (xhttp.readyState === 4) {
            //state 200 show all´s fine, not 400 or 500
          xhttp.status === 200
          //if all right resolve the data
            ? resolve(JSON.parse(xhttp.responseText))
            //if not instantiate the error
            : reject(new Error("Error"));
        }
      };
      //send petition
      xhttp.send();
    });
  };