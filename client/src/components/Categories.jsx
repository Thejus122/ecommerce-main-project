import { useNavigate } from "react-router-dom";

export default function Categories() {

  const navigate = useNavigate();

  const categories = [
    "Gym",
    "Casual",
    "Formal",
    "Party",
  ];

  return (
    <div className="px-10 pt-2 pb-8">

      {/* TITLE */}

      <h3 className="text-4xl font-bold text-center mb-8">
        Categories
      </h3>

      {/* CATEGORY BOXES */}

      <div className="flex justify-center gap-9 flex-wrap">

        {categories.map((item, index) => (

          <div
            key={index}
            onClick={() =>
              navigate(`/category/${item.toLowerCase()}`)
            }
            className="w-[170px] h-[70px] bg-white rounded-2xl shadow-md flex items-center justify-center text-2xl font-semibold hover:scale-105 hover:bg-black hover:text-white transition duration-300 cursor-pointer"
          >

            {item}

          </div>

        ))}

      </div>

    </div>
  );
}