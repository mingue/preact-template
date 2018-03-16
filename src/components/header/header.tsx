import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { style, classes } from "typestyle";

const headerWrapper = style({
    display: 'block',
    minHeight: '4rem'
});

export default class Header extends Component<any, any> {
    render() {
        return (
            <div default class="columns">
                <div class="column col-12">
                    <div class={classes(headerWrapper, 'navbar')}>
                        <section class="navbar-section">
                            <Link class="navbar-brand mr-3" activeClassName="active" href="/">Home</Link>
                            <Link class="btn btn-link" activeClassName="active" href="/page1">Page1</Link>
                            <Link class="btn btn-link" activeClassName="active" href="/page2">Page2</Link>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}