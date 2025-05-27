import { render, screen, fireEvent } from '@testing-library/react';
import Calculadora from 'src/components/calculadora';

describe('Componente Calculadora', () => {
test('muestra el título de la calculadora', () => {
render(<Calculadora />);
expect(screen.getByText(/calculadora/i)).toBeInTheDocument();
});

test('realiza suma correctamente', () => {
render(<Calculadora />);
fireEvent.click(screen.getByText('1'));
fireEvent.click(screen.getByText('+'));
fireEvent.click(screen.getByText('2'));
fireEvent.click(screen.getByText('='));
expect(screen.getByRole('textbox')).toHaveValue('3');
});

test('realiza resta correctamente', () => {
render(<Calculadora />);
fireEvent.click(screen.getByText('5'));
fireEvent.click(screen.getByText('-'));
fireEvent.click(screen.getByText('3'));
fireEvent.click(screen.getByText('='));
expect(screen.getByRole('textbox')).toHaveValue('2');
});

test('realiza multiplicación correctamente', () => {
render(<Calculadora />);
fireEvent.click(screen.getByText('4'));
fireEvent.click(screen.getByText('×'));
fireEvent.click(screen.getByText('3'));
fireEvent.click(screen.getByText('='));
expect(screen.getByRole('textbox')).toHaveValue('12');
});

test('realiza división correctamente', () => {
render(<Calculadora />);
fireEvent.click(screen.getByText('8'));
fireEvent.click(screen.getByText('÷'));
fireEvent.click(screen.getByText('2'));
fireEvent.click(screen.getByText('='));
expect(screen.getByRole('textbox')).toHaveValue('4');
});

test('muestra error en división entre cero', () => {
render(<Calculadora />);
fireEvent.click(screen.getByText('9'));
fireEvent.click(screen.getByText('÷'));
fireEvent.click(screen.getByText('0'));
fireEvent.click(screen.getByText('='));
expect(screen.getByRole('textbox')).toHaveValue('Error');
});

test('acepta números decimales', () => {
render(<Calculadora />);
fireEvent.click(screen.getByText('1'));
fireEvent.click(screen.getByText('.'));
fireEvent.click(screen.getByText('5'));
fireEvent.click(screen.getByText('+'));
fireEvent.click(screen.getByText('2'));
fireEvent.click(screen.getByText('.'));
fireEvent.click(screen.getByText('5'));
fireEvent.click(screen.getByText('='));
expect(screen.getByRole('textbox')).toHaveValue('4');
});

test('limpia el resultado al pulsar C', () => {
render(<Calculadora />);
fireEvent.click(screen.getByText('7'));
fireEvent.click(screen.getByText('C'));
expect(screen.getByRole('textbox')).toHaveValue('');
});
});