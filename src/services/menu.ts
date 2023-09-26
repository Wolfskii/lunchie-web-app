
// Define the API URL
const apiUrl = 'https://lunch.wolfskii.dev/village'

// Define a function to fetch the menu data
export async function fetchVillageTodaysMenu() {
  try {
    const response = await fetch(apiUrl + '/today')

    if (!response.ok) {
      throw new Error(`Failed to fetch menu data: ${response.statusText}`)
    }

    const menuData = await response.json()
    console.log(menuData)
    return menuData
  } catch (error: any) {
    throw new Error(`Error fetching menu data: ${error.message}`)
  }
}
