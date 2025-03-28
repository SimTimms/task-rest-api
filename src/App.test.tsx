// Import the necessary libraries
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "./App";

// Mock the Crud component
vi.mock("./pages", () => ({
  Crud: () => <div data-testid="crud-component">Mocked Crud Component</div>,
}));

describe("App Component", () => {
  it("renders without crashing", () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  it("renders Crud component within the main element", () => {
    render(<App />);
    const mainElement = screen.getByRole("main");
    const crudComponent = screen.getByTestId("crud-component");
    expect(mainElement).toContainElement(crudComponent);
  });
});
