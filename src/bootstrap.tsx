import { h, render } from "preact";
import App from "./components/app/app";
import { EventBus, IEventBus } from "./domain/EventBus";
import Provider from "preact-context-provider";

interface IAppContext {
    EventBus: IEventBus;
}

const eb = new EventBus();

render(
    <Provider eb={eb}>
        <App />
    </Provider>
, document.getElementById("app"));