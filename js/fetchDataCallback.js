// Function definition and exportation
export const fetchDataCallback = (url_api, callback) => {
    //instantiate connection
    const xhttp = new XMLHttpRequest();
    //open connection setting the method, route and if it´s asynchronous
    xhttp.open("GET", url_api, true);
    //call validation
    xhttp.onreadystatechange = () => {
        //state 4 shows it´s finished
        if (xhttp.readyState === 4) {
            //state 200 show all´s fine, not 400 or 500
            if (xhttp.status === 200) {
                //if all righgt, executes the callback sending the error and the result
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                // if not status 200
                let error = new Error('Error: ' + url_api);
                // kill the process sending the error
                return callback(error, null);
            }
        }
    };
    //send the petition
    xhttp.send();
};
