import { useState } from "react"
import axios from "axios"

const ENDPOINT = "https://calm-waters-99175.herokuapp.com"

export default function RequestsBasics() {
    const [response, setResponse] = useState(null)

    const handleGET = async () => {
        // Use axios to send a GET request to my heroku server. GET requests are usually used to read data from some source.
        // I pass in a param dict, { hello: "world" }. These params become part of the url's query string. 
        // This is the same as below: await axios.get(`ENDPOINT?hello=world`)
        const res = await axios.get(ENDPOINT, {
            params: { hello: "world" },
        })
        console.log(res)
        setResponse({ type: "GET", data: res.data })
    }

    const handlePOST = async () => {
        // Use axios to send a POST request to my heroku server. POST requests are used to write data to so me source (see PUT requests as well).
        // First parameter is the URL to make the request to, second parameter is the request body, the data to send, and the third parameter is 
        //   the configuration of the request.
        // Below, I'm sending a json, which I explicitly say in the "Content-Type" header. You can send multiple data types with a POST request, 
        //   from straight text, to javascript, to a data format called "multipart/form-data", used for complex files. 
        const res = await axios.post(
            ENDPOINT,
            { // Request body, the data to send
                i: 1,
                love: true,
                convergent: ["a", "b", "c"],
            },
            { headers: { "Content-Type": "application/json" } } // Configuration of request, here I define headers only, but there's more options.
        )
        console.log(res)
        setResponse({ type: "POST", data: res.data })
    }

    let requestJSX = null
    if (response && response.type === "GET") {
        requestJSX = (
            <div>
                <p>Message: {response.data.message}</p>
                <p>Query Parameters:</p>
                <ul>
                    {response.data.queryParams &&
                        Object.entries(response.data.queryParams).map(
                            ([k, v]) => {
                                return (
                                    <li>
                                        <strong>{k}:</strong> {v}
                                    </li>
                                )
                            }
                        )}
                </ul>
            </div>
        )
    } else if (response && response.type === "POST") {
        requestJSX = (
            <div>
                <p>
                    Number of calls made in total: {response.data.numberOfCalls}
                </p>
                <p>Body Params sent: </p>
                <ul>
                    {response.data.bodyParameters.map(([k, v]) => (
                        <li>
                            <strong>{k}:</strong> {v}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <div>
            <p>Click the buttons to make requests.</p>
            <div style={{ marginTop: 8, marginBottom: 8 }}>
                <button onClick={handleGET} style={{ marginRight: 8 }}>
                    GET Request
                </button>
                <button onClick={handlePOST}>POST Request</button>
            </div>
            {requestJSX}
        </div>
    )
}
