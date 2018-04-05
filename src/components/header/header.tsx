import { h, Component } from "preact";
import { Link } from "preact-router/match";
import * as s from "./style.scss";

export default class Header extends Component<any, any> {
    render() {
        return (
            <div class={`${s.headerWrapper} navbar`}>
                <section class="navbar-section">
                    <Link class={`${s.homeLink} navbar-brand mr-3`} activeClassName="active" href="/">Home</Link>
                    <Link class="btn btn-link" activeClassName="active" href="/page1">Page1</Link>
                    <Link class="btn btn-link" activeClassName="active" href="/page2">Page2</Link>
                </section>
            </div>
        );
    }
}