import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import ROUTES from "./routes"

function App() {
    return (
        <Router>
            <div style={{ fontFamily: "sans-serif" }}>
                <Route path="/">
                    {ROUTES.map(({ label, path }) => {
                        return (
                            <div
                                style={{ marginTop: 4, marginBottom: 4 }}
                                key={path}
                            >
                                <Link to={path}>{label}</Link>
                            </div>
                        )
                    })}
                    <hr />
                </Route>
                {ROUTES.map(({ label, ...props }, i) => {
                    return <Route {...props} key={i} />
                })}
            </div>
        </Router>
    )
}

export default App
