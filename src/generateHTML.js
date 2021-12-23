const generateManager = (data) => {
    return `
    <div class= "col-4 mt-4">
        <div class= "card h-100">
            <div class= "card-header">
                <h2>${manager.name}</h2>
                <h3>Manager</h3>
            <div>

        <div class= "card-body">
            <p class= "id">ID: ${manager.id}</p>
            <p class= "email">Email: <a href="mailto: ${manager.email}">${manager.email}</a></p>
            <p class= "office-number">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
    `;
}

const generateEngineer = (data) => {
    return `
    <div class= "col-4 mt-4">
        <div class= "card h-100">
            <div class= "card-header">
                <h2>${engineer.name}</h2>
                <h3>Engineer</h3>
            <div>

        <div class= "card-body">
            <p class= "id">ID: ${engineer.id}</p>
            <p class= "email">Email: <a href="mailto: ${engineer.email}">${engineer.email}</a></p>
            <p class= "github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
    `
}

const generateIntern = (data) => {
    return `
    <div class= "col-4 mt-4">
        <div class= "card h-100">
            <div class= "card-header">
                <h2>${intern.name}</h2>
                <h3>Intern</h3>
            <div>

        <div class= "card-body">
            <p class= "id">ID: ${intern.id}</p>
            <p class= "email">Email: <a href="mailto: ${intern.email}">${intern.email}</a></p>
            <p class= "school">School: ${intern.school}</p>
        </div>
    </div>
    `
};





/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html> */


module.exports = generateHTML;