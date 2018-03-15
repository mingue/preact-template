import { h, Component } from 'preact';
import Header from './header/Header';
import Router from 'preact-router';
import Page1 from '../routes/page1';
import Page2 from '../routes/page2';
import './style.scss';

export default class App extends Component<any, any> {
    render() {
        return (
            <div>
                <Header />
                <div class="container">
                    <Router>                    
                        <div default>
                            Default page
                        </div>
                        <Page1 path="/page1"></Page1>
                        <Page2 path="/page2"></Page2>
                    </Router>   
                </div>
            </div>
        );
    }
}