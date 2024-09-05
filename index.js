const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// * Please DO NOT INCLUDE the private app access token in your repo. Don't do this practicum in your normal account.
require('dotenv').config();
const PRIVATE_APP_ACCESS = process.env.HUBSPOT_ACCESS_TOKEN;

// TODO: ROUTE 1 - Create a new app.get route for the homepage to call your custom object data. Pass this data along to the front-end and create a new pug template in the views folder.
app.get('/', async (req, res) => {
    const parties = 'https://api.hubapi.com/crm/v3/objects/parties?properties=id,name,when,venue';
    const headers = {
        Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
        'Content-Type': 'application/json'
    }

    try {
        const response = await axios.get(parties, { headers });
        const data = response.data.results;
        res.render('homepage', { title: 'Parties | HubSpot APIs', data });
    } catch (error) {
        console.error(error);
    }
});



// TODO: ROUTE 2 - Create a new app.get route for the form to create or update new custom object data. Send this data along in the next route.

app.get('/update-cobj', async (req, res) => {
    const partyId = req.query.id;

    const headers = {
        Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
        'Content-Type': 'application/json'
    }

    if (partyId) {
        const party = `https://api.hubapi.com/crm/v3/objects/parties/${partyId}?properties=id,name,when,venue`;
        try {
            const response = await axios.get(party, { headers });
            const data = response.data;
            // res.json(data);
            res.render('updates', { title: 'Update Custom Object Form | Integrating With HubSpot I Practicum.', data });

        } catch (error) {
            console.error(error);
        }
    } else {
        res.render('updates', { title: 'Update Custom Object Form | Integrating With HubSpot I Practicum.', data: {} });
    }


});


// TODO: ROUTE 3 - Create a new app.post route for the custom objects form to create or update your custom object data. Once executed, redirect the user to the homepage.

app.post('/update-cobj', async (req, res) => {
    const update = {
        properties: {
            "name": req.body.name,
            "when": req.body.when,
            "venue": req.body.venue
        }
    }

    const partyId = req.query.id;
    const headers = {
        Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
        'Content-Type': 'application/json'
    };

    try {
        if (partyId) {
            // Update existing record
            const updateParty = `https://api.hubapi.com/crm/v3/objects/parties/${partyId}`;
            await axios.patch(updateParty, update, { headers });
        } else {
            // Create new record
            const createParty = `https://api.hubapi.com/crm/v3/objects/parties`;
            await axios.post(createParty, update, { headers });
        }
        res.redirect('/');
    } catch(err) {
        console.error(err);
    }
});

/**
* * This is sample code to give you a reference for how you should structure your calls.

* * App.get sample
app.get('/contacts', async (req, res) => {
    const contacts = 'https://api.hubspot.com/crm/v3/objects/contacts';
    const headers = {
        Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
        'Content-Type': 'application/json'
    }
    try {
        const resp = await axios.get(contacts, { headers });
        const data = resp.data.results;
        res.render('contacts', { title: 'Contacts | HubSpot APIs', data });
    } catch (error) {
        console.error(error);
    }
});

* * App.post sample
app.post('/update', async (req, res) => {
    const update = {
        properties: {
            "favorite_book": req.body.newVal
        }
    }

    const email = req.query.email;
    const updateContact = `https://api.hubapi.com/crm/v3/objects/contacts/${email}?idProperty=email`;
    const headers = {
        Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
        'Content-Type': 'application/json'
    };

    try {
        await axios.patch(updateContact, update, { headers } );
        res.redirect('back');
    } catch(err) {
        console.error(err);
    }

});
*/


// * Localhost
app.listen(3000, () => console.log('Listening on http://localhost:3000. '));