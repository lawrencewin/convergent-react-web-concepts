# 3. React Router

React Router is the most popular client-side routing solution for React Web. This library allows you to selectively render components based off the URL in the browser.

## Installation

The NPM page and repository is located [here](https://reactrouter.com/web/guides/quick-start). In your project folder, install the library with the following commands based off your package manager of choice:

For NPM users:

```
npm install react-router-dom
```

For Yarn users:

```
yarn add react-router-dom
```

## Usage

To start splitting your app between routes, you will need to use the high-level `Router` component.

```javascript
import { BrowserRouter as Router }

function App () {
    return (
        <Router>
            ...
        </Router>
    )
}
```

There are two types of `Routers` to use: `BrowserRouter` and `HashRouter`. The difference between the two is implementation: `BrowserRouter` uses the browser history API to divide Routes while `HashRouter` uses `window.location.hash` to divide Routes. In most cases, it's preferable to use `BrowserRouter`.

Within the Router, you can then render JSX on individual routes using the `Route` component.

```javascript
import { BrowserRouter as Router, Route }

function Convergent () {
    return (
        <p>Enabling innovation at the intersection of technology, business, and design.</p>
    )
}

function App () {
    return (
        <Router>
            <Route path="/">
                <p>I love convergent!</p>
            </Route>
            <Route path="/convergent" component={Convergent}>
            <Route path="/:variable"><p>This uses params.</p></Route>
        </Router>
    )
}
```

We define the route to render using the `path` prop. We can then render content in two different ways: by passing JSX as a nested child of the `Route` or by passing in a Component Type through the `component` prop.

If we render the `App`, then we should expect that "I love convergent!" exclusively displays on the root route "/", the `Convergent` component exclusively renders on the "/convergent" route, and the /:variable route renders "This uses params" exclusively. Not quite.

React Router renders components inclusively based on the route. The route "/convergent" matches "/convergent", but it also matches "/", meaning that both routes are rendered. Also "/convergent" matches "/:variable", meaning they will both be rendered as well. This can be useful in some cases, but in this case, we don't want this. To fix this, we can do one of two things.

Fix 1 requires us to attach an extra prop to the "/" `Route` called `exact`. This is a boolean prop that states that the current route should only be rendered if the browser route is an exact match to the URL. Now "/" will only render at the root route instead of all routes.

```javascript
<Route exact path="/">
    <p>I love convergent!</p>
</Route>
```

Fix 2 requires a new component: the `Switch`. This component will only render the first route match under the `Switch`, rather than rendering all matches. Now only "/convergent" renders instead of both "/convergent" and "/:variable".

```javascript
import { BrowserRouter as Router, Route, Switch }

function App () {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <p>I love convergent!</p>
                </Route>
                <Route path="/convergent" component={Convergent}>
                <Route path="/:variable"><p>This uses params.</p></Route>
            </Switch>
        </Router>
    )
}
```

## Miscellaneous

To create hyperlinks between routes, use the `Link` component rather than an anchor tag. This way, you can switch routes without needing to refresh the page. You can also pass data via props to modify app behavior.

```javascript
import { BrowserRouter as Router, Route, Switch, Link }

function App () {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Link to="/convergent">Go to /convergent</Link>
                </Route>
                <Route path="/convergent" component={Convergent}>
            </Switch>
        </Router>
    )
}
```

More documentation for React Router can be viewed [here]().
