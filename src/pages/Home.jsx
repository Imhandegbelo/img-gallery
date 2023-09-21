import { useRef, useState } from "react";
import Card from "../component/Card";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
// import ImageSearch from "../component/ImageSearch";
import Skeleton from "../component/Skeleton";

export default function Home() {
  const LOCK = "39547829-3541a858f0864fa3f6ad9a193";
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const url = `https://pixabay.com/api/?key=${LOCK}&q=${search}&image_type=photo`;
  const draggedItem = useRef(null);
  const draggedOverItem = useRef(null);

  useState(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setImages(data.hits);
        setisLoading(false);
      })
      .catch((error) => console.log(error));
  }, [search]);

  function ImageSearch(searchText) {
    const [text, setText] = useState("");

    const onSubmit = (e) => {
      e.preventDefault();
      searchText(text);
    };

    return (
      <div className="flex place-items-center mx-auto px-4 border-transparent">
        <form
          onSubmit={onSubmit}
          className="w-full flex justify-center px-4 border-transparent"
        >
          <input
            type="text"
            className="inline-flex p-4 border-b-2 border-slate-900 rounded-l w-full md:max-w-sm"
            placeholder="Search a photo tag..."
            value={search}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="submit"
            value="Submit"
            className="p-4 bg-slate-900 text-white rounded-r"
          />
        </form>
      </div>
    );
  }

  // Handle sorting
  function handleSort() {
    // duplicate the image list for easy manipulation
    let _images = [...images];

    // remove and save the dragged Item content
    const draggedItemContent = _images.splice(draggedItem.current, 1)[0];

    // switch the position
    _images.splice(draggedOverItem.current, 0, draggedItemContent)

    // reset the position reference
    draggedItem.current=null
    draggedOverItem.current=null

    // update the actual array
    setImages(_images)
  }
  
  return (
    <>
      <Navbar />
      <ImageSearch
        searchText={(text) => setSearch(text)}
        style={{ height: "100px" }}
      />
      {/* <ImageSearch /> */}
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
