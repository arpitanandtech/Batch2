const http = require("http");

http.createServer(function (req, res, next) {

  const TO_DO = [
    {
      title: "Wakeup"
    },
    {
      title: "Go to gym"
    },
    {
      title: "Go to office"
    }
  ];
  const html = `<h1>Arpit</h1>`;
  // This is an object

  res.writeHead(200, { 'Content-Type': "application/json" }); // Headers 
  res.end(JSON.stringify(TO_DO));
}).listen(8090);