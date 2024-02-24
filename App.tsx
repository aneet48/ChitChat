import React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store/store';
import Main from './src';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
