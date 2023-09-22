import { useEffect, useRef, useState } from "react";
import Card from "../component/Card";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import ImageSearch from "../component/ImageSearch";
import Skeleton from "../component/Skeleton";
import { useAuth } from "../Contexts/AuthContext";

export default function Home() {
  const LOCK = "39547829-3541a858f0864fa3f6ad9a193";
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const draggedItem = useRef(null);
  const draggedOverItem = useRef(null);

  // const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  useEffect(() => {
    const url = `https://pixabay.com/api/?key=${LOCK}&q=${search}&image_type=photo`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
        console.log("from home: ", search);
      })
      .catch((error) => console.log(error));
  }, [search]);
  console.log("from query:", search);

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
      <Navbar />
      <ImageSearch searchText={(text) => setSearch(text)} />

      <div className="bg-gray-100 max-w-[1440px] px-12 py-6 pt-6 md:px-24">
        {isLoading && (
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
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
              // className={`${ondrag}`}
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
