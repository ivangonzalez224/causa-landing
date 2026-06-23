import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import PaymentResult from './PaymentResult';

const setSearch = (search: string) => {
  Object.defineProperty(window, 'location', {
    writable: true,
    value: { ...window.location, search, pathname: '/' },
  });
};

describe('PaymentResult', () => {
  afterEach(() => {
    setSearch('');
  });

  it('renders nothing when no PayPal params in URL', () => {
    setSearch('');
    const { container } = render(<PaymentResult />);
    expect(container).toBeEmptyDOMElement();
  });

  it('shows pending state when subscription_id is present', () => {
    setSearch('?subscription_id=I-TEST123');
    render(<PaymentResult />);
    expect(screen.getByText(/procesando/i)).toBeInTheDocument();
  });

  it('shows cancelled state when ba_token is present without subscription_id', () => {
    setSearch('?ba_token=cancelled');
    render(<PaymentResult />);
    expect(screen.getByText(/no completaste/i)).toBeInTheDocument();
  });

  it('closes when X button is clicked', () => {
    setSearch('?subscription_id=I-TEST123');
    render(<PaymentResult />);
    fireEvent.click(screen.getByLabelText('Cerrar'));
    expect(screen.queryByText(/procesando/i)).not.toBeInTheDocument();
  });
});
