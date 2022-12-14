import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import store from '../redux/store';
import Home from '../components/Home';

describe('Home page testing', () => {
  test('Does Home match the snapshot', () => {
    const home = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(home).toMatchSnapshot();
  });
});
