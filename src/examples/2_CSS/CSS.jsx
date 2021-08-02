/**
 * CSS(Cascading Style Sheets) is the language used to style an HTML document.
 * CSS describes how HTML elements should be displayed.
 * There are different ways to provide CSS styling in React, including styled components, in-line styling, and CSS modules. The most popular
 * method and the one shown in this example will be CSS modules, where users define styles for components in a separate .module.css file and then
 * import that file and use those styles as classnames within a function or class component
 *
 * You can consult the following link: https://www.w3schools.com/cssref/ for a list of all of the different CSS properties that you can apply
 * and https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference for a list of the most common properties
 */

import styles from "./styles.module.css"

//Code examples taken from https://www.javascriptstuff.com/css-modules-by-example/ and modified
export default function Example() {
    return (
        <div className={styles.container}>
            <h1 className={styles.bigblue}>Texas Convergent</h1>
            <button className={styles.button}>Click Me</button>
            <div className={styles.fun}>
                <button className={styles.button}>FUN BUTTON</button>
            </div>
            <h2 className={styles.title}>Email Signup</h2>
            <input className={styles.email} placeholder="Email Please" />
            <button className={styles.submitButton}>Submit</button>
        </div>
    )
}
