const fs = require('fs');

function checkFile(path, contents) {
    if (!fs.existsSync(path)) {
        console.error("Error: " + path + " not found.");
        process.exit(1);
    }
    const content = fs.readFileSync(path, 'utf8');
    contents.forEach(str => {
        if (!content.includes(str)) {
            console.error("Error: " + path + " missing '" + str + "'");
            process.exit(1);
        }
    });
}

checkFile('index.html', ['id="navbar-container"', 'id="footer-container"']);
checkFile('components.js', ['<nav', 'footer', 'bg-gray-900']);

console.log("Website components found and structure looks correct.");
