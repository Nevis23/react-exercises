import { useEffect, useState } from "react";

type Cat = {
  id: string;
  url: string;
};

const CatGallery = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=10"
        );
        const data = await response.json();
        setCats(data);
      } catch (error) {
        console.error("Error fetching cats:", error);
      }
    };

    fetchCats();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cat Gallery</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cats.map((cat) => (
          <img
            key={cat.id}
            src={cat.url}
            alt="Cat"
            className="w-full h-64 object-cover rounded-xl shadow"
          />
        ))}
      </div>
    </div>
  );
};

export default CatGallery;