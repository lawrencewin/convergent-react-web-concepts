import BaseElements from "./examples/1_BaseElements/BaseElements"
import CSS from "./examples/2_CSS/CSS"
import ReactRouter from "./examples/3_RoutingWithReactRouter/ReactRouter"
import MaterialUI from "./examples/4_UsingAUILibrary/MaterialUI"
import RequestsBasics from "./examples/5_RequestsAndAxios/RequestsBasics"
import RequestsAdvanced from "./examples/5_RequestsAndAxios/RequestsAdvanced"
import CenterItems from "./examples/6_MiscellaneousUsefulThings/CenterItems"

const routes = [
    {
        component: BaseElements,
        path: "/BaseElements",
        label: "1. Base Elements",
    },
    { component: CSS, path: "/CSS", label: "2. CSS" },
    {
        component: ReactRouter,
        path: "/ReactRouter",
        label: "3. Routing with React Router",
    },
    {
        component: MaterialUI,
        path: "/MaterialUI",
        label: "4. Using a UI Library",
    },
    {
        component: RequestsBasics,
        path: "/Requests/Basics",
        label: "5a. Axios Basics",
    },
    {
        component: RequestsAdvanced,
        path: "/Requests/Advanced",
        label: "5b. Axios with File Uploads",
    },
    {
        component: CenterItems,
        path: "/CenterItems",
        label: "Miscellaneous and Useful Things",
    },
]

export default routes
