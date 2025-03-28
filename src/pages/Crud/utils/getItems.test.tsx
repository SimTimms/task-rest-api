import { describe, it, expect, vi } from "vitest";
import getItems from "./getItems"; // Import the getItems function
import { ItemArrayOptions } from "../../../types";
import getRestItems from "../../../service/getRestItems"; // Mock this in the tests

vi.mock("../../../service/getRestItems"); // Mock the getRestItems service

describe("getItems function", () => {
  it("sets the state to Fetching at the beginning of the fetch", async () => {
    const mockSetItemArray = vi.fn();
    vi.mocked(getRestItems).mockResolvedValue([]);

    await getItems(mockSetItemArray);

    expect(mockSetItemArray).toHaveBeenCalledWith({
      itemArray: [],
      fetchResult: ItemArrayOptions.Fetching,
    });
  });

  it("updates the state to Idle when valid items are fetched", async () => {
    const mockSetItemArray = vi.fn();
    const mockItems = [{ id: 1, name: "Item 1" }];
    vi.mocked(getRestItems).mockResolvedValue(mockItems);

    await getItems(mockSetItemArray);

    expect(mockSetItemArray).toHaveBeenCalledWith({
      itemArray: [],
      fetchResult: ItemArrayOptions.Idle,
    });
  });

  it("updates the state to NoItems when the fetched items are invalid", async () => {
    const mockSetItemArray = vi.fn();
    vi.mocked(getRestItems).mockResolvedValue(null); // Invalid item array

    await getItems(mockSetItemArray);

    expect(mockSetItemArray).toHaveBeenCalledWith({
      itemArray: null,
      fetchResult: ItemArrayOptions.NoItems,
    });
  });

  it("updates the state to ErrorFetching when an error occurs", async () => {
    const mockSetItemArray = vi.fn();
    vi.mocked(getRestItems).mockRejectedValue(new Error("Failed to fetch"));

    await getItems(mockSetItemArray);

    expect(mockSetItemArray).toHaveBeenCalledWith({
      itemArray: [],
      fetchResult: ItemArrayOptions.ErrorFetching,
    });
  });
});
