import { useState } from "react";
import { Search } from "lucide-react"; // ใช้ไอคอนจาก lucide-react


const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-2 shadow-sm bg-white">
      <input
        type="text"
        className="flex-1 outline-none px-3 py-2 text-gray-700 placeholder-gray-400"
        placeholder="Name, Category, Brand"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button
        onClick={handleSearch}
        className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        <Search size={20} />
      </button>
    </div>
  );
};

export default SearchBox;
