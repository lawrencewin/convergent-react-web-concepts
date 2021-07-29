import { useState } from "react"
import axios from "axios"

const ENDPOINT = "https://calm-waters-99175.herokuapp.com"

export default function RequestsWithUploads() {
    const [ files, setFiles ] = useState(null)
    const [ size, setSize ] = useState(0)
    const [ responseData, setResponseData ] = useState("")

    // Listens for file input click
    const handleChange = (e) => {
        setFiles(e.target.files)
        let sz = 0
        for (const file of e.target.files) {
            sz += file.size
        }
        setSize(sz)
    }

    // Sends request to a heroku server I created
    const handleClick = async () => {
        // To send files, you need to wrap all of them them within a form data object.
        const data = new FormData()
        for (const file of files) {
            // Here, I use the key "uploads". This key is something you set yourself within the back-end.
            data.append("uploads", file)
        }
        // Files must be sent through either a POST or PUT request. 
        const response = await axios.post(`${ENDPOINT}/upload`, data, {
            headers: { 
                "Content-Type": "multipart/form-data", // Make sure to set this header!
            }
        })
        if (response.status === 200) {
            console.log(response.data)
            setResponseData(response.data)
        } else {
            alert("File upload failed :(.")
        }
    }

    return (
        <div>
            <p>{ files ? `You've selected ${files.length} files with a total size of ${size} bytes.` : "Upload some files here!"}</p>
            {/* Our file input, which accepts multiple files, with an onChange listener */}
            <input type="file" multiple onChange={handleChange} />
            <p>
                <button onClick={handleClick}>Upload the file(s)</button>
            </p>
            { typeof responseData === "object" && (
                <div>
                    <p>You've uploaded <strong>{responseData.totalUploads} files</strong>, or <strong>{responseData.totalSize} bytes</strong>, to the server at <strong>{ENDPOINT}</strong>. Here's some information about what you've sent.</p>
                    <ol>
                        { responseData.info.map((f, i) => {
                            return (
                                <li key={i} style={{marginBottom: 8, lineHeight: "130%"}}>
                                    Name: <strong>{f.name}</strong>
                                    <ul>
                                        <li>Type: <strong>{f.type}</strong></li>
                                        <li>Size: <strong>{f.size} B</strong></li>
                                        <li>First 10 bytes: <code>{f.firstTenBytes}</code></li>
                                    </ul>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            ) }
        </div>
    )
}
