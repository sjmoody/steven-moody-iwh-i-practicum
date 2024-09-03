const axios = require('axios');
require('dotenv').config();

async function getCustomObjectSchema(accessToken, objectName) {
  const url = `https://api.hubapi.com/crm/v3/schemas/${objectName}`;

  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  };

  try {
    const response = await axios.get(url, { headers });
    console.log('Custom object schema:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching custom object schema:', error.response ? error.response.data : error.message);
    throw error;
  }
}

async function associateObjectTypes(accessToken, customObjectId) {
  const url = 'https://api.hubapi.com/crm/v3/schemas/' + customObjectId + '/associations';

  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  };

  const data = {
    fromObjectTypeId: customObjectId,
    toObjectTypeId: "contacts",
    name: "parties_to_contacts"
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log('Object types associated successfully:', response.data);
  } catch (error) {
    console.error('Error associating object types:');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
      console.error('Headers:', error.response.headers);
    } else if (error.request) {
      console.error('Request was made but no response was received');
      console.error(error.request);
    } else {
      console.error('Error', error.message);
    }
    console.error('Error config:', error.config);
  }
}

// Usage
const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;
const customObjectName = 'parties';  // Your custom object name

(async () => {
  try {
    // First, get the custom object schema to verify it exists and get its ID
    const schema = await getCustomObjectSchema(accessToken, customObjectName);
    const customObjectId = schema.objectTypeId;

    console.log(`Custom object ID for ${customObjectName}: ${customObjectId}`);

    // If the above doesn't throw an error, proceed with association
    await associateObjectTypes(accessToken, customObjectId);
  } catch (error) {
    console.error('Failed to complete operation:', error);
  }
})();