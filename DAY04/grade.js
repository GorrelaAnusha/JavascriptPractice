const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question("Enter your marks: ", (marks) => {
    marks = Number(marks);

    if (marks >= 90) {
        console.log("A grade");
    } else if (marks >= 80) {
        console.log("B grade");
    } else if (marks >= 50) {
        console.log("C grade");
    } else {
        console.log("Fail");
    }

    readLine.close();
});
