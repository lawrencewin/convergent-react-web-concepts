import { useState, Fragment } from "react"
import { Route, Switch, Link, useParams, useRouteMatch } from "react-router-dom"

// You may already notice that this project is using React Router to route between web examples.
// Below are some more complex React Router tools.
export default function Example() {
    const [useSwitch, setUseSwitch] = useState(true)
    const [variable, setVariable] = useState("variable")

    // The routes rendered below are nested routes. This 'path' variable from the useRouteMatch hook
    // gives me the current route I'm on, which I can use to nest the routes below.
    const { path } = useRouteMatch()

    const Comp = useSwitch ? Switch : Fragment

    return (
        <Fragment>
            <div>
                <span style={{ display: "inline-block", margin: 8 }}>
                    <input
                        type="radio"
                        name="switch"
                        id="useSwitch"
                        checked={useSwitch === true}
                        onChange={() => setUseSwitch(true)}
                    />
                    <label htmlFor="useSwitch">Use {"<Switch />"}</label>
                </span>
                <span style={{ display: "inline-block", margin: 8 }}>
                    <input
                        type="radio"
                        name="switch"
                        id="noSwitch"
                        checked={useSwitch === false}
                        onChange={() => setUseSwitch(false)}
                    />
                    <label htmlFor="noSwitch">Don't Use {"<Switch />"}</label>
                </span>
            </div>
            {/* This <Comp /> component is either a switch or a fragment depending on the radio button value above. */}
            <Comp>
                <Route exact path={`${path}/`}>
                    <p>Welcome to the root route.</p>
                    <div>
                        <label htmlFor="variableInput">
                            Input a variable route value:{" "}
                        </label>
                        <input
                            type="text"
                            value={variable}
                            onChange={(e) => setVariable(e.target.value)}
                            id="variableInput"
                        />
                    </div>
                    <p>
                        Go to <Link to={`${path}/convergent`}>/convergent</Link>
                        .
                    </p>
                    <p>
                        Go to{" "}
                        <Link to={`${path}/${variable}`}>/{variable}</Link>.
                    </p>
                </Route>
                <Route path={`${path}/convergent`} component={Convergent} />
                <Route path={`${path}/:variable`} component={Variable} />
            </Comp>
            <Route path={`${path}/:any`}>
                <p>
                    <Link to={`${path}/`}>Go back to the root.</Link>
                </p>
            </Route>
        </Fragment>
    )
}

function Convergent() {
    return (
        <p>
            Enabling innovation at the intersection of technology, business, and
            design.
        </p>
    )
}

function Variable() {
    // This useParams() hook lets me get the variable value of a route URL.
    const params = useParams()
    return (
        <p>
            The parameter in the current route is{" "}
            <strong>{params.variable}</strong>.
        </p>
    )
}
