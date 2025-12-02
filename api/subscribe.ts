import type { VercelRequest, VercelResponse } from '@vercel/node';

// 1. Changed to a named function without 'export default'
async function subscribeHandler(request: VercelRequest, response: VercelResponse) {
    // 1. Only accept POST requests
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method Not Allowed' });
    }

    // Get secrets from Vercel's environment variables (securely hidden)
    const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
    const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID;

    // CRITICAL CHECK: If keys are missing, force a visible server error immediately.
    if (!MAILERLITE_API_KEY || !MAILERLITE_GROUP_ID) {
        console.error('CONFIGURATION ERROR: Missing MailerLite API Key or Group ID.');
        return response.status(500).json({ 
            success: false, 
            error: 'Server configuration error: Required API keys are missing on Vercel.' 
        });
    }

    const { email } = request.body;

    // 2. Validate input
    if (!email) {
        return response.status(400).json({ error: 'Email is required.' });
    }

    const addSubscriberUrl = `https://connect.mailerlite.com/api/subscribers`;
    
    try {
        // 3. Make the secure POST request to MailerLite
        const subscriberResponse = await fetch(addSubscriberUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // The API key is securely passed in the Authorization header
                'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
                'X-Version': '2023-08-25', // Recommended MailerLite API version
            },
            body: JSON.stringify({
                email: email,
                status: 'active', // Adds them as a confirmed subscriber
                groups: [MAILERLITE_GROUP_ID], // Adds them to your specific group
            }),
        });

        const data = await subscriberResponse.json();

        // 4. Handle MailerLite's response
        // Success (200-299 status code)
        if (subscriberResponse.ok) {
            return response.status(200).json({ 
                success: true, 
                message: 'Success! You are on the list.' 
            });
        } 
        // Handle "already exists" error gracefully (status is usually 422)
        else if (data.message && data.message.includes('already exists')) {
            return response.status(200).json({ 
                success: true, 
                message: 'Success! You were already on the list.' 
            });
        }
        else {
            // MailerLite returned a true error (400, 401, 403, etc.)
            console.error('MailerLite API Error:', subscriberResponse.status, data);

            // This ensures your frontend is correctly told it failed (not a 200 status)
            const status = subscriberResponse.status >= 400 && subscriberResponse.status < 500 ? 400 : 500;

            return response.status(status).json({ 
                success: false, 
                error: data.message || `Failed to subscribe. MailerLite Status: ${subscriberResponse.status}` 
            });
        }

    } catch (error) {
        // 5. Handle unexpected server errors (network, timeout, etc.)
        console.error('API Server Error (Catch Block):', error);
        return response.status(500).json({ 
            success: false, 
            error: 'Internal server error occurred.' 
        });
    }
}

// 2. Explicitly export the function using the Node.js standard (CommonJS)
module.exports = subscribeHandler;