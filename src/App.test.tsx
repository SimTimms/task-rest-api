// Import the necessary libraries
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App"; // Ensure App is properly exported as a React component

// Describe the test suite
describe("App Component", () => {
  it("should display the correct text", () => {
    // Render the App component
    render(<App />);

    // Assert that the text "Hello, world!" is in the document
    expect(screen.getByText("CRUD")).toBeInTheDocument();
  });
});
