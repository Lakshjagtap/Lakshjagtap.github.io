import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Navbar component', () => {
  render(<App />);
  
  // Assuming Navbar renders something specific, check for it
  const navbarElement = screen.getByTestId('navbar'); // Adjust as per your Navbar component setup
  expect(navbarElement).toBeInTheDocument();
});

test('renders Footer component', () => {
  render(<App />);
  
  // Assuming Footer renders something specific, check for it
  const footerElement = screen.getByTestId('footer'); // Adjust as per your Footer component setup
  expect(footerElement).toBeInTheDocument();
});

// Add more tests for other components as needed
