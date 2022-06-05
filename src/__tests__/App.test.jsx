import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import App from '../App';

test('Memory card should always be in the document', () => {
  render(<App />);
  const header = screen.getByText('Memory card', { exact: false });
  expect(header).toBeInTheDocument();
});
