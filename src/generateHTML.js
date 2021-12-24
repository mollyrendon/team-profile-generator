/*Generate Manager Function
This generateManager function will create the manager card on the html page.
*/
const generateManager = function (manager) {
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

/*Generate Engineer Function
This generateEngineer function will create the engineer card on the html page.
*/
const generateEngineer = function (engineer)  {
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

/*Generate Intern Function
This generateIntern function will create the intern card on the html page.
*/
const generateIntern = function (intern)  {
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

/* Generate HTML Function
The generateHTML function runs through the data and creates an
array of cards with the employee's role on it.  It then joins the cards
together to create on big string that is then used to generate a page
for the team.
*/

generateHTML = (data) => {
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);
            pageArray.push(internCard);
        }
    }

    const employeeCards = pageArray.join('')

    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
}

/*Generate Team Page Function
The generateTeamPage function generates the HTML page with the employeeCards data.
*/
const generateTeamPage = function (employeeCards)  {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h2 2-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                ${employeeCards}
            </div>
        </main>    
</body>
</html>
    
    `;
}




/*This will export the generateHTML page data to the index page*/

module.exports = generateHTML;