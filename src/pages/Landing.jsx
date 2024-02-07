import { useState, useEffect } from "react";
import ImageSearch from "../component/ImageSearch";
import Skeleton from "../component/Skeleton";

export default function Landing() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = import.meta.env.VITE_apiKey;

  const FetchSearchData = async (term) => {
    setIsLoading(true);
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo`;
    try {
      const response = await fetch(url);
      const result = await response.json();
      setImages(result.hits);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    FetchSearchData(search);
  }, [search]);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(https://unsplash.com/photos/a-saturn-like-object-with-a-ring-around-it-82vZAQQn_e8)`,
        }}
        className="flex items-center justify-center w-screen h-screen"
      >
        <ImageSearch searchText={(text) => setSearch(text)} />
      </div>

      <div className="bg-gray-100 max-w-[1440px] px-12 py-6 pt-6 md:px-24">
        {isLoading && (
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-3 ">
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        )}

        <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              draggable
              onDragStart={(e) => (draggedItem.current = index)}
              onDragEnter={(e) => (draggedOverItem.current = index)}
              onDragEnd={handleSort}
            >
              <Card image={image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
