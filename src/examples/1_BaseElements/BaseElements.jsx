import "./BaseElements.css"

//Code example taken from https://careerkarma.com/blog/basic-html-tags/ and modified
export default function Example() {
    return (
        <div>
            <h1>Example &lt;h1&gt; tag</h1>
            <h2>Example &lt;h2&gt; tag</h2>
            <h3>Example &lt;h3&gt; tag</h3>
            <h4>Example &lt;h4&gt; tag</h4>
            <h5>Example &lt;h5&gt; tag</h5>
            <h6>Example &lt;h6&gt; tag</h6>
            <p>Example &lt;p&gt; tag </p>
            <a href="https://www.txconvergent.org/">Example &lt;a&gt; tag</a>
            <p> Example &lt;img&gt; below </p>
            <div>
                <img
                    style={{ width: "10%", height: "10%" }}
                    src={require("../../assets/doge.png").default}
                    alt="doge"
                />
            </div>
            <div> I'm an example &lt;div&gt; tag </div>
            <div>
                I'm an{" "}
                <span style={{ color: "red" }}> example &lt;span&gt; </span> tag
            </div>
            <div id="lists">
                <h2>Ordered List</h2>
                How To Do Dishes:
                <ol>
                    <li>Gather dirty dishes</li>
                    <li>Fill sink up with soapy water</li>
                    <li>Wash dishes</li>
                    <li>Rinse dishes</li>
                    <li>Dry Dishes</li>
                    <li>Put Away Dishes</li>
                </ol>
                <h2>Unordered List</h2>
                Shopping List:
                <ul>
                    <li>Dish Detergent</li>
                    <li>Milk</li>
                    <li>Apples</li>
                    <li>Carrots</li>
                    <li>Chicken</li>
                    <li>Potatoes</li>
                </ul>
            </div>
            <table>
                <tr>
                    <th>Coffee</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>Regular Coffee</td>
                    <td>$2.00</td>
                </tr>
                <tr>
                    <td>Iced Coffee</td>
                    <td>$2.00</td>
                </tr>
                <tr>
                    <td>Americano</td>
                    <td>$2.75</td>
                </tr>
                <tr>
                    <td>Capuccino</td>
                    <td>$4.00</td>
                </tr>
                <tr>
                    <td>Mocha</td>
                    <td>$4.25</td>
                </tr>
            </table>
            <form>
                <h3>Forms</h3>
                <div class="input-box">
                    <label for="input-name" class="label-name">
                        Name:
                    </label>
                    <input type="text" class="input-name" />
                </div>
                <div class="input-box">
                    <label for="input-age" class="label-age">
                        Age:
                    </label>
                    <input type="number" class="input-age" />
                </div>
                <input type="submit" class="button" />
            </form>
            <h2>Embed a Video</h2>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/vUM30uCNf60"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    )
}
