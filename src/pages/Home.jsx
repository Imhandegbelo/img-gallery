import { useEffect, useRef, useState } from "react";
import Card from "../component/Card";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import ImageSearch from "../component/ImageSearch";
import Skeleton from "../component/Skeleton";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../config/firebase";

export default function Home() {
  const apiKey = import.meta.env.VITE_unsplashKey;
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const draggedItem = useRef(null);
  const draggedOverItem = useRef(null);
  const navigate = useNavigate();

  const FetchSearchData = async (term) => {
    setIsLoading(true);
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo`;
    try {
      const response = await fetch(url);
      const result = await response.json();
      setImages(result.hits);
      setIsLoading(false);
    } catch (error) {
      console.error({ error });
    } finally {
      setIsLoading(false);
    }
  };

  const user = auth.currentUser;
  useEffect(() => {
    if (user) {
      FetchSearchData(search);
    } else {
      navigate("/");
    }
  }, [search]);

  // Handle sorting
  function handleSort() {
    // duplicate the image list for easy manipulation
    let _images = [...images];

    // remove and save the dragged Item content
    const draggedItemContent = _images.splice(draggedItem.current, 1)[0];

    // switch the position
    _images.splice(draggedOverItem.current, 0, draggedItemContent);

    // reset the position reference
    draggedItem.current = null;
    draggedOverItem.current = null;

    // update the actual array
    setImages(_images);
  }

  return (
    <>
      <Navbar userInfo={user} />
      <ImageSearch searchText={(text) => setSearch(text)} />

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
      <Footer />
    </>
  );
}
