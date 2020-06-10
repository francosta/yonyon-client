import React from 'react';
import { render as rtlRender } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {
  initialState as yonInitialState,
  yonReducer,
} from '../src/store/reducers/yon';
import {
  initialState as authInitialState,
  authReducer,
} from '../src/store/reducers/auth';

const middleware = [ReduxThunk];

const rootReducer = combineReducers({
  yon: yonReducer,
  auth: authReducer,
});

const state = {
  auth: authInitialState,
  yon: yonInitialState,
};

function render(
  ui,
  {
    initialState = state,
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(...middleware)
    ),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react-native';

// override render method
export { render };
