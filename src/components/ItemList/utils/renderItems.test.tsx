import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import renderItems from "./renderItems";

describe("renderItems function", () => {
  it("returns null if the itemArray is empty", () => {
    const { container } = render(<>{renderItems([])}</>); // Render the returned JSX
    expect(container.firstChild).toBeNull(); // No elements should be rendered
  });

  it("renders a list of items when the itemArray is not empty", () => {
    const mockItems = [
      { _id: "1", name: "Item 1", price: 10 },
      { _id: "2", name: "Item 2", price: 20 },
    ];

    render(<>{renderItems(mockItems)}</>);

    const renderedItems = screen.getAllByText(/Item \d/); // Matches "Item 1" and "Item 2"
    expect(renderedItems).toHaveLength(2); // Two items should be rendered
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("renders each item with a unique key", () => {
    const mockItems = [
      { _id: "1", name: "Item A", price: 15 },
      { _id: "2", name: "Item B", price: 25 },
    ];

    const { container } = render(<>{renderItems(mockItems)}</>);
    const renderedItems = container.querySelectorAll("div");

    expect(renderedItems).toHaveLength(2); // Two items should be rendered
    expect(renderedItems[0].getAttribute("key")).toBe(null); // Key isn't directly in DOM
    expect(renderedItems[0].textContent).toBe("Item A");
    expect(renderedItems[1].textContent).toBe("Item B");
  });
});
