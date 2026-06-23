import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import Pricing from './Pricing';

const renderPricing = () =>
  render(
    <I18nextProvider i18n={i18n}>
      <Pricing />
    </I18nextProvider>
  );

describe('Pricing', () => {
  it('renders three plan cards', () => {
    renderPricing();
    // Use real names en .json: "The Tourist", "The Traveler", "The Local"
    expect(screen.getByText(/the tourist/i)).toBeInTheDocument();
    expect(screen.getByText(/the traveler/i)).toBeInTheDocument();
    expect(screen.getByText(/the local/i)).toBeInTheDocument();
  });

  it('shows prices for all three plans', () => {
    renderPricing();
    expect(screen.getByText('$9')).toBeInTheDocument();
    expect(screen.getByText('$15')).toBeInTheDocument();
    expect(screen.getByText('$99')).toBeInTheDocument();
  });

  it('opens modal when any CTA button is clicked', () => {
    renderPricing();
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);
    // Modal has a link to WhatsApp
    expect(screen.getByRole('link', { name: /chat|whatsapp|causa/i })).toBeInTheDocument();
  });

  it('closes modal when overlay is clicked', () => {
    renderPricing();
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);
    const overlay = document.querySelector('[class*="modalOverlay"]')!;
    fireEvent.click(overlay);
    expect(screen.queryByRole('link', { name: /chat|whatsapp/i })).not.toBeInTheDocument();
  });
});
