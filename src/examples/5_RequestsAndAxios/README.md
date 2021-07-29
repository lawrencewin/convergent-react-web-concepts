# Requests with Axios

## What are Requests?

Requests are the primary way apps connected to the internet communicate with each other. Requests send multiple types of data, from strings, numbers, JSONS, files, and more. 

HTTP requests are the most common requests sent within the apps we in convergent will be making. These requests are uni-directional: a client will make and send an HTTP request to a server, the server will read the request, and the server will send an HTTP response back to the client based off the contents of the request. 

HTTP requests are divided into multiple types, though you'll only be using a couple of the many types, which will be bolded below.

- **GET** Requests - Requests send when the client wants to read data from a server. When you enter a website URL in your browser bar, you are sending a GET request to the server located at the domain, and you are receiving an HTML file that will render in the browser window.
- **POST** Requests - Requests sent when the client wants to write data to a server. POST requests are usually not idempotent - this means that sending the same POST request to some server multiple times will have different results. In practice, however, it depends on how a server handles POST requests.
- PUT requests - Requests sent when the client wants to write data to a server. The difference between the PUT and POST request is that the PUT request is idempotent - the same PUT request sent to the same server multiple times should always result in the same outcome. 
- DELETE requests - Requests sent when the client wants to delete data from a server.
- More types can be seen in the [Mozilla Web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

## How to Make Requests

There are two ways to make HTTP requests on React Web.

1. Using the Web Fetch API, exclusive to browsers.
2. Using Axios, a universal request library available on both React and React Native.

I will briefly cover usage with Axios.

### The `axios` Function

The default import from the axios module is the `axios` function, which creates and sends HTTP requests. The function takes a single object:

```javascript
import axios from "axios"

const response = await axios({
    method: "<The request type: get|post|put|delete|etc.>",
    url: "<The endpoint you want to send the request to>",
    params: { 
        // The querystring within the endpoint you're sending to. Value 
        // must be a string. Used usually with a GET request.
        key1: "val1",
        key2: "val2",
        // If you're sending a req to http://google.com, adding this will
        // send a req to the endpoint: http://google.com?key1=val1&key2=val2
    },
    data: {
        // The request body you're sending to the server, usually in a non-GET request.
        // Here, I'm using a JSON, but this can be anything serializable 
        //  (e.g. a string, number, array, files, etc.)
        a: 1,
        b: true,
        c: ["d", "e"],
        f: { g: "h" },
    },
    header: {
        // metadata for the server to read, good for declaring things  
        //  like request body data-type, cookies, etc.
        "Content-Type": "application/json",
    },
    // ... more options found in axios docs.
})
```
The function returns a **promise** which resolves a response object. This object has a `statusCode` and `data`. 
- The `statusCode` tells whether the response was successful or not. The convention is that anything in the 200 range is good, while anything in the 400 range is bad.
- The data is the actual contents of the response itself. This can be text, a file, a JSON, XML, a redirect, etc. 

Here's an example GET request to google search.
```javascript
const response = await axios({
    method: "get",
    url: "http://google.com/search",
    params: {
        q: "texas convergent".
    },
})
```
And here's an example POST request to the Texas Convergent website (this isn't real btw).
```javascript
const response = await axios({
    method: "post",
    url: "http://txconvergent.org/database/leads/larry_win",
    data: {
        operation: "venmo",
        source: "dues",
        cashAmount: 1_000_000,
    },
    headers: { "Content-Type": "application/json" }
})
```

### Aliases

If the `axios` function has too many parameters, you can use a method alias. Here are two alternate ways to make the same GET and POST requests as above.

```javascript
await axios.get("http://google.com/search", {
    params: {
        q: "texas convergent".
    }
})

await axios.post("http://txconvergent.org/database/leads/larry_win", {
    operation: "venmo",
    source: "dues",
    cashAmount: 1_000_000,
}, { 
    headers: { "Content-Type": "application/json" }
})
```
This applies for the other method types listed above.

## Sending Files

Sending files through a request is specific. It requires taking advantage of a data-type called **form data**. 

If we're working on the web, we first need the file object or file list obtained from the HTML file input. We'll then create an instance of the `FormData` class, a special map that can hold complex types and send them over a request. We'll then add our file to the `FormData` map with a given key. Afterwards, we send the request, specifying our data type as `multipart/form-data".

```javascript
// This sends a request everytime we select a file. Ideally, we want to save the request for when we press submit the form itself.
const handleChange = async (e) => {
    const file = e.target.file
    const formdata = new FormData()
    formdata.append("file", file)
    const response = await axios.post(
        "our.url.com",
        formdata, // put the form data map as our main request body
        { 
            headers: { 
                "Content-Type": "multipart/form-data", // don't forget this!
            } 
        },
    )
}

return (
    <input type="file" onChange={handleChange} />
)
```