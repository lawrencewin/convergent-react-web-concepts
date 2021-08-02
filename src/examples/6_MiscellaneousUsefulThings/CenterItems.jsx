import styles from "./styles.module.css"

/**
 * Use flex, justify-content, and align-items to center items. justify-content applies in the direction of the main axis(row/horizontal by default for flex) and
 * align-items applies in the direction of the secondary axis. You must use flex(display: flex) in order to use justify-content and align-items for css flexbox.
 * CSS flex by default row aligns items(side-by-side), you can set it to top-down using flex-direction: column. Flexbox is a very useful css tool/library that
 * you can utilize to create a polished, structured layout for your application. See more info about flexbox here:
 * https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 */

export default function Example() {
    return (
        <div
            style={{
                height: "80vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div className={styles.container1}>
                <p> Column-aligned text with flexbox</p>
                <p> hello hello </p>
            </div>
            <div className={styles.container2}>
                <p> Row-aligned text with flexbox(default)</p>
                <p> hello hello </p>
            </div>
            <div className={styles.container3}>
                <p> Centered text horizontally with flexbox</p>
            </div>
            <div className={styles.container4}>
                <p> Centered text vertically with flexbox</p>
            </div>
            <div className={styles.container5}>
                <p> Centered text vertically and horizontally with flexbox</p>
            </div>
        </div>
    )
}
