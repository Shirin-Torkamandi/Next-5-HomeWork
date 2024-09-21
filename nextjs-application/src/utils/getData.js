export default async function getData(url) {
    try {
      const response = await fetch(`${url}?limit=8`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
  