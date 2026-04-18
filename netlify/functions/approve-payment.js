exports.handler = async (event) => {
    const paymentId = event.queryStringParameters.paymentId;
    const apiKey = process.env.PI_API_KEY;

    try {
        const response = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/approve`, {
            method: 'POST',
            headers: { 
                'Authorization': `Key ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
