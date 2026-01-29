export async function getData() {
  try {
    const res = await fetch('https://t-core.fit-hub.pro/Test/GetTariffs');
    if (!res.ok) {
      console.error('Failed to fetch data:', res.statusText);
      return [];
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}
