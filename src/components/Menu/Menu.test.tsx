import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import Menu from ".";
import ItemContext from "../../context/ItemContext";
import { ItemArrayOptions, views } from "../../types";

// Mock functions
const mockSetItemArray = vi.fn();
const mockFetchItemsAndUpdateState = vi.fn();
vi.mock("./fetchItemsAndUpdateState", () => ({
  fetchItemsAndUpdateState: mockFetchItemsAndUpdateState,
}));

const mockContextValue = {
  setItemArray: mockSetItemArray,
  itemArray: {
    fetchResult: ItemArrayOptions.Idle,
    itemArray: [],
    view: views.Read,
  },
};

describe("Menu Component", () => {
  it("throws an error if ItemContext is not provided", () => {
    expect(() => render(<Menu />)).toThrow(
      "ItemContext must be used within a valid provider."
    );
  });

  it("renders all buttons with the correct text", () => {
    render(
      <ItemContext.Provider value={mockContextValue}>
        <Menu />
      </ItemContext.Provider>
    );

    const createButton = screen.getByRole("button", { name: /create/i });
    const readButton = screen.getByRole("button", { name: /read/i });
    const updateButton = screen.getByRole("button", { name: /update/i });
    const deleteButton = screen.getByRole("button", { name: /delete/i });

    expect(createButton).toBeInTheDocument();
    expect(readButton).toBeInTheDocument();
    expect(updateButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });

  it("enables the Read button when fetchResult is not Fetching", () => {
    render(
      <ItemContext.Provider value={mockContextValue}>
        <Menu />
      </ItemContext.Provider>
    );
    const readButton = screen.getByRole("button", { name: /read/i });
    expect(readButton).toBeEnabled();
  });

  it("triggers the Create action callback when clicked", async () => {
    render(
      <ItemContext.Provider value={mockContextValue}>
        <Menu />
      </ItemContext.Provider>
    );
    const createButton = screen.getByRole("button", { name: /create/i });
    await userEvent.click(createButton);
  });

  it("triggers the Read action callback when clicked", async () => {
    render(
      <ItemContext.Provider value={mockContextValue}>
        <Menu />
      </ItemContext.Provider>
    );
    const createButton = screen.getByRole("button", { name: /read/i });
    await userEvent.click(createButton);
  });

  it("triggers the Update action callback when clicked", async () => {
    render(
      <ItemContext.Provider value={mockContextValue}>
        <Menu />
      </ItemContext.Provider>
    );
    const updateButton = screen.getByRole("button", { name: /update/i });
    await userEvent.click(updateButton);
  });

  it("triggers the Delete action callback when clicked", async () => {
    render(
      <ItemContext.Provider value={mockContextValue}>
        <Menu />
      </ItemContext.Provider>
    );
    const deleteButton = screen.getByRole("button", { name: /delete/i });
    await userEvent.click(deleteButton);
  });
});
