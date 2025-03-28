import { describe, it, expect } from "vitest";
import { Crud } from "./index"; // Assuming this is the file containing your code

describe("Crud Module Re-Export", () => {
  it("imports the Crud component correctly", () => {
    expect(Crud).toBeDefined();
  });

  it("is the expected Crud component type", () => {
    // You can check that Crud is of the expected type or structure
    expect(typeof Crud).toBe("function"); // If Crud is a React component, this should hold true
  });
});
