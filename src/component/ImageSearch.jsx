import { useState } from "react";

export default function ImageSearch({ searchText }) {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault()
    searchText(text);
  };

  return (
    <div className="flex place-items-center mx-auto px-4 border-transparent">
      <form onSubmit={onSubmit} className="w-full flex justify-center px-4 border-transparent">
        <input
          type="text"
          className="inline-flex p-4 border-b-2 border-slate-900 rounded-l w-full md:max-w-sm"
          placeholder="Search a photo tag..."
          value={text}
          onChange={e => setText(e.target.value)}
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
