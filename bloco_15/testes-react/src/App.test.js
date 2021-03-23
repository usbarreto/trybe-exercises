import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  const meuApp = render(<App />);
  const inputEmail = meuApp.getByLabelText(/Email/i);
  expect(inputEmail).toBeInTheDocument();
});

test('Verificando se existe um botão', () => {
  const meuApp2 = render (<App />);
  const sendButton = meuApp2.getByRole('button');
  expect(sendButton).toBeInTheDocument();
});

test('Verificando se existe um botão', () => {
  const { getByRole } = render(<App />);
  const btn = getByRole('button');
  expect(btn).toBeInTheDocument();
});
