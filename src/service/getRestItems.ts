export default async function getRestItems() {
  try {
    const response = await fetch(`${import.meta.env.VITE_API}/items`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch items: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
}
