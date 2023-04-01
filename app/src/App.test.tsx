import { render, screen } from '@testing-library/react';
import App from './App';


const RequireAuth = ({ children } : { children: JSX.Element }) => {
  return <div>{children}</div>;
}

test('renders learn react link', () => {
  const r = render(<App />);
  expect(r.getByText(/My fucking lib/i)).not.toBeUndefined();
});


// test('renders the fucking ', () => {
//   const r = render(<App />);
//   const linkElement = r.getByText(/My fucking Lib/i);
//   expect(linkElement).toBeInTheDocument();
// });
