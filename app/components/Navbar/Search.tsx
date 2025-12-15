"use client";

import { useState } from "react";

type SearchBoxProps = {
  placeholder?: string;
  onSearch?: (query: string) => void;
};

export default function SearchBox({
  placeholder = "Search...",
  onSearch,
}: SearchBoxProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
   
  };

  return (
    <form onSubmit={handleSubmit} className="hidden md:flex items-center gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-black"
      />
      <button
        type="submit"
        className="bg-white text-green-900 px-3 py-1 rounded-md hover:bg-green-900 hover:text-white transition"
      >
        Search
      </button>
    </form>
  );
}
