# Welcome to the Integrating With HubSpot I: Foundations Practicum

This repository is for the Integrating With HubSpot I: Foundations course. This practicum is one of two requirements for receiving your Integrating With HubSpot I: Foundations certification. You must also take the exam and receive a passing grade (at least 75%).

To read the full directions, please go to the [practicum instructions](https://app.hubspot.com/academy/l/tracks/1092124/1093824/5493?language=en).

**Put your HubSpot developer test account custom objects URL link here:** https://app.hubspot.com/contacts/46923428/objects/2-34056352/views/all/list

___
## Tips:
- Commit to your repository often. Even if you make small tweaks to your code, it’s best to be committing to your repository frequently.
- The subject of the custom object is up to you. Feel free to get creative!
- Please create a test account and include your private app access token in your repo.
- Ensure you re-merge any working branches into the main branch.
- DO NOT ADD YOUR PRIVATE APP TOKEN TO YOUR REPOSITORY.

## Pre-requisites:
- Using [Node](https://nodejs.org/en/download) and node packages
- Using [Express](https://expressjs.com/en/starter/installing.html)
- Using [Axios](https://axios-http.com/docs/intro)
- Using [Pug templating system](https://pugjs.org/api/getting-started.html)
- Using the command line
- Using [Git and GitHub](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)


## Requirements
### Basics
- [x]  All work must be your own. During the grading process we will check the revision history. Submissions that do not meet this requirement will not be considered.
- [x]  You must have at least two new routes in your index.js file and one new pug template for the homepage.
- [x]  You must create a developer test account and link to it in your README.md file. Submissions that do not meet this requirement will not be considered.
- [x] Create a new developer test account
- [x] Create a private app with the right title and permissions
- [x] Create a custom object with three properties, three records, and association to contacts
- [x] Fork Github repo and follow the instructions
- [x] Add to README a link to custom object in HubSpot
- [x] Create a new branch off the main branch and run checkout
- [x] Make first commit with message
- [x] Install node modules

### Routes
- [x] app.get route for the homepage
- [x] app.get for rendering the HTML form in a pug template called updates. ("/update-cobj"). The HTML form should have fields to create a new CRM record with the three custom object properties.
- [x] app.post for the route that sends along the data captured by the HTML form

### Views
- [x] Create a new pug template called updates in the views folder
- [x] Render the updates template and pass along a page title called "Update Custom Object Form | Integrating With HubSpot I Practicum."
- [x] In the updates pug template, add a link “Return to the homepage” that links to the root route.

### Handle app.post route
- [x] Make a POST request with the HTML form data to create a new CRM record
- [x] After the CRM record is created, write a redirect back to the homepage.

### Handle the app.get route
- [x] Make a GET request to retrieve the CRM record data. Make sure to get al of the custom property fields data.
- [x] Create a pug template called homepage in the views folder to render an HTML table.
- [x] Pass the CRM record data as a variable to the template. The template should display the list of custom objects in a table format with columns for the custom object's individual properties.
- [x] In the homepage pug template, add a link at the top that says "Add to this table" and links to the "/update-cobj" route. See screenshot in practicum for example.

### Testing
- [x] Test your app by running node index.js in your terminal and open up the link to the localhost to make sure it works as expected. You should be able to create a new CRM record on the update-cobj route and then see those changes reflected in the homepage table.
- [] Re-merge your working branch into your main branch in Github. Copy the shareable link to the forked repo and paste it into the input field in the "Submit INtegrating with Hubspot" form on the academy and click Submit.
- [] Be sure the repo is public.




