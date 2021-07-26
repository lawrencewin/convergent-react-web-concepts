import { useState } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import ROUTES from "./routes"

function App() {
    return (
        <Router>
            <div style={{ fontFamily: "sans-serif" }}>
                <Route path="/">
                    {ROUTES.map(({ label, path }) => {
                        return (
                            <div style={{ marginTop: 4, marginBottom: 4 }}>
                                <Link to={path}>{label}</Link>
                            </div>
                        )
                    })}
                    <hr />
                </Route>
                {ROUTES.map(({ label, ...props }) => {
                    return <Route {...props} />
                })}
            </div>
        </Router>
    )
}

export default App
