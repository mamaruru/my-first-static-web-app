module.exports = async function (context, req) {
    context.res.body = JSON.stringify({
        text: "Hello from the API"
    });
    context.res.headers = {
        "Content-Type": "application/json"
    };
};