export default function Card({ image }) {
  const tags = image.tags.split(", ");

  return (
    <div className={`shadow-xl cursor-move`}>
      <img
        src={image.webformatURL}
        alt="road1"
        className="w-full aspect-[4/3] md:h-[22.5rem] object-cover"
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-xl text-indigo-600 font-semibold pt-1 ml-2 md:ml-6">
          Image by {image.user}
        </h2>
        <div className="grid grid-cols-3">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="text-sm border border-indigo-600 mb-2 mx-1 p-1 md:mb-6 md:p-1"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
