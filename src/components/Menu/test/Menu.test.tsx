import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import Menu from "..";
import { ItemArrayOptions } from "../../../types";

describe("Menu Component", () => {
  it("renders without crashing", () => {
    const mockSetItemArray = vi.fn();
    const mockItemArray = { fetchResult: ItemArrayOptions.Idle, itemArray: [] };

    const { container } = render(
      <Menu setItemArray={mockSetItemArray} itemArray={mockItemArray} />
    );
    expect(container).toBeInTheDocument();
  });

  it("renders all buttons with the correct text", () => {
    const mockSetItemArray = vi.fn();
    const mockItemArray = { fetchResult: ItemArrayOptions.Idle, itemArray: [] };
    render(<Menu setItemArray={mockSetItemArray} itemArray={mockItemArray} />);
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
    const mockSetItemArray = vi.fn();
    const mockItemArray = { fetchResult: ItemArrayOptions.Idle, itemArray: [] };
    render(<Menu setItemArray={mockSetItemArray} itemArray={mockItemArray} />);
    const readButton = screen.getByRole("button", { name: /read/i });
    expect(readButton).toBeEnabled();
  });

  it("triggers the Create action callback when clicked", async () => {
    const mockSetItemArray = vi.fn();
    const mockItemArray = { fetchResult: ItemArrayOptions.Idle, itemArray: [] };
    render(<Menu setItemArray={mockSetItemArray} itemArray={mockItemArray} />);
    const createButton = screen.getByRole("button", { name: /create/i });
    await userEvent.click(createButton);
  });

  it("triggers the Read action callback when clicked", async () => {
    const mockSetItemArray = vi.fn();
    const mockItemArray = { fetchResult: ItemArrayOptions.Idle, itemArray: [] };
    render(<Menu setItemArray={mockSetItemArray} itemArray={mockItemArray} />);
    const createButton = screen.getByRole("button", { name: /read/i });
    await userEvent.click(createButton);
  });

  it("triggers the Update action callback when clicked", async () => {
    const mockSetItemArray = vi.fn();
    const mockItemArray = { fetchResult: ItemArrayOptions.Idle, itemArray: [] };
    render(<Menu setItemArray={mockSetItemArray} itemArray={mockItemArray} />);
    const updateButton = screen.getByRole("button", { name: /update/i });
    await userEvent.click(updateButton);
  });

  it("triggers the Delete action callback when clicked", async () => {
    const mockSetItemArray = vi.fn();
    const mockItemArray = { fetchResult: ItemArrayOptions.Idle, itemArray: [] };
    render(<Menu setItemArray={mockSetItemArray} itemArray={mockItemArray} />);
    const deleteButton = screen.getByRole("button", { name: /delete/i });
    await userEvent.click(deleteButton);
  });
});
