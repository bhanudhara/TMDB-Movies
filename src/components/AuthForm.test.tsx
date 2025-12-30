import { render, screen, fireEvent } from '@testing-library/react';
import { AuthForm } from './AuthForm';

test('renders AuthForm and submits', () => {
  const onAuth = jest.fn();
  render(<AuthForm onAuth={onAuth} />);
  fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: '123456' } });
  fireEvent.click(screen.getByText(/register/i));
  expect(onAuth).toHaveBeenCalled();
});