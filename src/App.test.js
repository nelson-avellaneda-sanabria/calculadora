import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
test('renderiza el título de la calculadora', () => {
render(<App />);
const titulo = screen.getByText(/calculadora/i);
expect(titulo).toBeInTheDocument();
});

test('muestra los botones numéricos', () => {
render(<App />);
const boton5 = screen.getByText('5');
expect(boton5).toBeInTheDocument();
});

test('realiza una suma correctamente', () => {
render(<App />);
fireEvent.click(screen.getByText('2'));
fireEvent.click(screen.getByText('+'));
fireEvent.click(screen.getByText('3'));
fireEvent.click(screen.getByText('='));
});
});
