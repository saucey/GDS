// import React from 'react';
// import { shallow } from 'enzyme';
// import App from './App';

// it('renders without crashing', () => {
//   shallow(<App />);
// });

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders welcome message', () => {
  const { getByText } = render(<App />);
  expect(getByText('Example page')).toBeInTheDocument();
});
