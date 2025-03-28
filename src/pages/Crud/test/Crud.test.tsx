import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Crud from "../";

// Mock the Menu component
vi.mock("../components", () => ({
  Menu: () => <div data-testid="menu-component">Mocked Menu Component</div>,
}));

// Mock the ItemList component
vi.mock("../../components", () => ({
  ItemList: () => (
    <div data-testid="item-list-component">Mocked ItemList Component</div>
  ),
}));

describe("Crud Component", () => {
  it("renders without crashing", () => {
    const { container } = render(<Crud />);
    expect(container).toBeInTheDocument();
  });

  it("renders the header with the correct text", () => {
    render(<Crud />);
    const headerElement = screen.getByRole("heading", { level: 1 }); // Fixed the role to "heading" instead of "header"
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent("CRUD");
  });

  it("renders the Menu component within the navigation", () => {
    render(<Crud />);
    const navElement = screen.getByRole("navigation"); // Clarified the test name
    const menuComponent = screen.getByTestId("menu-component");
    expect(navElement).toContainElement(menuComponent);
  });

  it("renders the ItemList component within the section", () => {
    render(<Crud />);
    const sectionElement = screen.getByRole("region", { name: /item list/i }); // Ensure that ItemList section is properly labeled
    const itemListComponent = screen.getByTestId("item-list-component");
    expect(sectionElement).toContainElement(itemListComponent);
  });
});
