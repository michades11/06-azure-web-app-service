const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    // Using standard quotation marks to prevent editor backtick issues
    res.write("<!DOCTYPE html><html lang='en'><head>");
    res.write("<meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'>");
    res.write("<title>Enterprise App Status</title>");
    res.write("<style>");
    res.write("body { font-family: sans-serif; background-color: #f4f6f9; color: #333; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }");
    res.write(".card { background: white; padding: 40px; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.05); text-align: center; max-width: 450px; width: 100%; }");
    res.write(".badge { background-color: #d1fae5; color: #065f46; padding: 6px 16px; border-radius: 50px; font-size: 0.85rem; font-weight: 600; display: inline-block; margin-bottom: 20px; }");
    res.write("h1 { font-size: 1.8rem; margin: 0 0 10px 0; color: #111827; }");
    res.write("p { color: #6b7280; font-size: 0.95rem; line-height: 1.5; margin-bottom: 30px; }");
    res.write(".metric-box { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 15px; font-family: monospace; font-size: 0.9rem; color: #4b5563; text-align: left; }");
    res.write("</style></head><body>");
    res.write("<div class='card'>");
    res.write("<div class='badge'>&#9679; Pipeline Active</div>");
    res.write("<h1>Deployment Successful</h1>");
    res.write("<p>Your Node.js web application infrastructure has been successfully provisioned and verified using passwordless OIDC authentication.</p>");
    res.write("<div class='metric-box'>");
    res.write("<strong>Host:</strong> Azure App Service<br>");
    res.write("<strong>Platform:</strong> Linux / Node 20+<br>");
    res.write("<strong>Source:</strong> GitHub Actions CI/CD");
    res.write("</div></div></body></html>");
    
    res.end();
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});