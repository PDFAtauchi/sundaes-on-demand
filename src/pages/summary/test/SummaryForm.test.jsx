import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "pages/summary/SummaryForm";

test("Initial condition", () => {
  // Given
  render(<SummaryForm />);

  // When
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });

  // Then
  expect(checkbox).not.toBeChecked();

  // And When
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  // Then
  expect(confirmButton).toBeDisabled();
});

test("Checkbox disables button on first click and enables on second click", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  fireEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();

  fireEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});
