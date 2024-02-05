const apiKey = import.meta.env.VITE_unsplashKey;

export const FetchSearchData = async (term) => {
//   setIsLoading(true);
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result.hits
    // setImages(result.hits);
    // setIsLoading(false);
  } catch (error) {
    console.error({ error });
  } finally {
    // setIsLoading(false);
  }
};
