import * as React from "react";
import {render} from "react-dom";
import {applyMiddleware, compose, createStore, Middleware, Store as ReduxStore} from "redux";
import {Provider} from "react-redux";
import {Route, Router, Switch} from "react-router";
import {createBrowserHistory} from "history";
import ErrorBoundary from "react-error-boundary";

import {appState} from "./app/reducers/store";

import I18n from "redux-i18n";
import {i18n} from "./app/translations";
import "babel-polyfill";
import createSagaMiddleware from "redux-saga";
import {rootSaga} from "./app/sagas/rootSaga";

import MainLayout from "./app/components/MainLayout";
import {UiApp} from "./app/components/UiApp";

import "./index.scss";
import {State} from "./app/state/State";
import {getLang, LANGUAGE_CODE_DEFAULT} from "./app/Lang";
import {initInflux} from "./influx/influx";

const isDev = process.env.NODE_ENV === "development";
const composeEnhancers = isDev
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const sagaMiddleware = createSagaMiddleware();
const browserHistory = createBrowserHistory({basename: "/sdc-technik-check-stefanil"});
const middlewares: Middleware[] = [sagaMiddleware];
const store: ReduxStore<State.All> = createStore(
    appState,
    composeEnhancers(applyMiddleware(...middlewares)),
);
sagaMiddleware.run(rootSaga);

initInflux(store);

render(
    <Provider store={store}>
        <I18n translations={i18n.translations} initialLang={getLang()} fallbackLang={LANGUAGE_CODE_DEFAULT}>
            <Router history={browserHistory}>
                <ErrorBoundary>
                    <MainLayout>
                        <Switch>
                            <Route path="/" component={UiApp}/>
                        </Switch>
                    </MainLayout>
                </ErrorBoundary>
            </Router>
        </I18n>
    </Provider>,
    document.getElementById("root"),
);
