import { render, screen } from "test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import ScoopOption from "pages/entry/ScoopOption";

test("indicate if scoop count is non-int or out of range", async () => {
  const user = userEvent.setup();
  render(<ScoopOption />);

  // negative
  const vanillaInput = screen.getByRole("spinbutton");
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "-1");
  expect(vanillaInput).toHaveClass("is-invalid");

  // no int
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "2.5");
  expect(vanillaInput).toHaveClass("is-invalid");

  // too high
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "11");
  expect(vanillaInput).toHaveClass("is-invalid");

  // valid
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "3");
  expect(vanillaInput).not.toHaveClass("is-invalid");
});
