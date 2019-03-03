let sum = 0;


var getTime = function() {

    var req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if(
            req.readyState === 4 && req.status === 200
        )
        {
            postMessage(JSON.parse(req.responseText).currentDateTime);
        }
    };


    req.open("GET",'http://worldclockapi.com/api/json/utc/now');
    req.send(null);

};


onmessage = function(e) {
    console.log('Worker: Message received from main script');

    getTime();
};


