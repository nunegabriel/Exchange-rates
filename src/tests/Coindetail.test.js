
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import Detail from '../components/Coindetail';
import '@testing-library/jest-dom';
import store from '../redux/store';

it('Detail page testing', () => {
  const detail = renderer.create(
    <Provider store={store}>
      <Router>
        <Detail />
      </Router>
    </Provider>,
  )
  expect(detail).toMatchSnapshot();
});
