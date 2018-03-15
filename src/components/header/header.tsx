import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import './style.scss';

export default class Header extends Component<any, any> {
    render() {
        return (
            <div class="panel">
                <nav>
                    <Link activeClassName="active" class="link" href="/">Home</Link>
                    <Link activeClassName="active" class="link" href="/page1">Page1</Link>
                    <Link activeClassName="active" class="link" href="/page2">Page2</Link>
                </nav>
            </div>
        );
    }
}