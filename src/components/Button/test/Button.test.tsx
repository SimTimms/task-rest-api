import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import Button from "../";

describe("Menu Component", () => {
  it("renders without crashing", () => {
    const { container } = render(<Button text="Test" callback={() => {}} />);
    expect(container).toBeInTheDocument();
  });

  it("is disabled with the prop", () => {
    const { container } = render(
      <Button text="Test" callback={() => {}} disabled={true} />
    );
    expect(container).toBeInTheDocument();
    const button = container.querySelector("button");
    expect(button).toBeDisabled();
  });

  it("is not disabled with the prop", () => {
    render(<Button text="Click me" />);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).not.toBeDisabled();
  });

  it("renders the button with the correct text", () => {
    render(<Button text="Click me" />);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
  });

  it("calls the callback function when clicked", async () => {
    const mockCallback = vi.fn();
    render(<Button text="Click me" callback={mockCallback} />);
    const button = screen.getByRole("button", { name: /click me/i });
    await userEvent.click(button);
    expect(mockCallback).toHaveBeenCalled();
  });

  it("does not call the callback function when the button is disabled", async () => {
    const mockCallback = vi.fn();
    render(<Button text="Click me" callback={mockCallback} disabled={true} />);
    const button = screen.getByRole("button", { name: /click me/i });
    await userEvent.click(button);
    expect(mockCallback).not.toHaveBeenCalled();
  });

  it("sets the aria-label attribute correctly", () => {
    render(<Button text="Submit" />);
    const button = screen.getByRole("button", { name: /submit/i });
    expect(button).toHaveAttribute("aria-label", "Submit");
  });
});
