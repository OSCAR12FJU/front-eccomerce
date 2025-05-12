import { useState, useEffect, useRef, useCallback } from "react";
import { Search, Search as SearchIcon, X} from "lucide-react";
import type { ProductType } from "../product/ProductCard";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import type { Product } from "@/components/product/ProductCard";
// import { products } from "@/lib/data";
import { allProducts } from "../../lib/data/products";
import { useNavigate } from "react-router-dom";

export default function SearchBar({className}:{className?: string}) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ProductType[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Filter products based on search query
  const searchProducts = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseQuery) ||
      product.category.toLowerCase().includes(lowerCaseQuery)
    );

    setResults(filtered.slice(0, 5)); // Limit to 5 results
  }, []);

  // Handle search input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    searchProducts(value);
  };

//   Handle search form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setIsOpen(false);
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resultsRef.current &&
        !resultsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Focus input when search is opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (

    // <div className="relative">
    // <button
    //   type="button"
    //   className="p-2 text-foreground hover:text-secondary transition-colors"
    //   onClick={() => setIsOpen(true)}
    //   aria-label="Search"
    // >
    //   <SearchIcon className="h-5 w-5" />
    // </button>
     <div className={`${className} flex-1 max-w-md `}>
        <div className="relative w-full">
         <input
          type="search"
          onClick={() => setIsOpen(true)}
          placeholder="What Are You Looking For"
          className="w-full pl-3 pr-10 py-1.5 border border-gray-300 rounded-md placeholder:text-sm placeholder:text-primary" />
         <button className="absolute right-0 top-0 bottom-0 rounded-l-none bg-primary text-white px-2 rounded-r-md">
             <Search className="h-4 w-4" />
          </button>
         </div>

    {isOpen && (
      <div className="fixed inset-0 z-40 flex items-start justify-center pt-16 px-4 bg-black/50">
        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Search for products</h2>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500"
                onClick={() => setIsOpen(false)}
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={handleInputChange}
                  placeholder="Поиск по названию или категории..."
                  className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </form>

            {query && (
              <div ref={resultsRef} className="mt-4">
                {results.length > 0 ? (
                  <div>
                    <h3 className="text-sm text-gray-500 mb-2"> Search results</h3>
                    <ul className="divide-y divide-gray-200">
                      {results.map((product) => (
                        <li key={product.id} className="py-2">
                          <a
                            href={`/product/${product.slug}`}
                            className="flex items-center hover:bg-gray-50 p-2 rounded"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={product.image}
                                alt={product.name}
                                width={64}
                                height={64}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="ml-4 flex-1">
                              <p className="text-sm font-medium">{product.name}</p>
                              <p className="text-sm text-gray-500">{product.price.toLocaleString('ru-RU')} ₽</p>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 text-center">
                      <button
                        type="button"
                        className="text-sm text-primary hover:text-primary/80 font-medium"
                        onClick={handleSubmit}
                      >
                       Show all results
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-gray-500">Nothing found</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    )}
  </div>
  );
}
