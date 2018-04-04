import { h, Component } from "preact";
import { Link } from "preact-router/match";

import { style, classes } from "typestyle";

const headerWrapper = style({
    display: "block",
    padding: "2rem 0 2rem 0",
    width: "100%",
    position: "fixed",
    top: 0,
    background: "linear-gradient(to bottom, rgba(255,255,255,1) 70%, rgba(0,0,0,0))"
});
const homeLink = style({
    marginRight: "4rem"
});

export default class Header extends Component<any, any> {
    render() {
        return (
            <div class={classes(headerWrapper, "navbar")}>
                <section class="navbar-section">
                    <Link class={classes(homeLink, "navbar-brand", "mr-3")} activeClassName="active" href="/">Home</Link>
                    <Link class="btn btn-link" activeClassName="active" href="/page1">Page1</Link>
                    <Link class="btn btn-link" activeClassName="active" href="/page2">Page2</Link>
                </section>
            </div>
        );
    }
}