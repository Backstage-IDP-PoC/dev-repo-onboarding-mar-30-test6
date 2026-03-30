const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <body style="background:white;font-family:Arial;text-align:center;margin-top:40px;">
      <h1 style="color:blue;">Welcome to GSPANN Self Service Portal!</h1>
      <p style="color:gray;font-size:22px;">
        Empowering Developers with CI/CD Automation in there existing GitHub Repositories 🚀
      </p>
    </body>
  `);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});