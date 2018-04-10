import { h, Component } from "preact";
import Router from "preact-router";
import Header from "../header/Header";
import Page1 from "../../routes/page1";
import Page2 from "../../routes/page2";
import * as s from "./style.scss";

export default class App extends Component<any, any> {
    componentDidMount() {
        console.log(this.context.eb);
    }
    render() {
        return (
            <div class={`${s.containerWrapper} container`}>
                <Header/>
                <Router>
                    <div default class="columns">
                        <div class="column col-12">
                            <h2>Default page</h2>
                        </div>
                    </div>
                    <Page1 path="/page1"></Page1>
                    <Page2 path="/page2"></Page2>
                </Router>
            </div>
        );
    }
}