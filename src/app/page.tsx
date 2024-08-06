import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import ProductCard from "@/components/ProductCard";
import Pic1 from "/home/sravan/Coding/WebDev/product-hunt-clone/public/image1.png";
import Pic2 from "/home/sravan/Coding/WebDev/product-hunt-clone/public/image2.png";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function Home() {
  const products = [
    {
      pic: Pic1,
      title: "Upmetrics AI",
      description: "Business plan & financial forecast using AI",
      upvotes: 497,
      comments: 330,
      categories: ["Productivity", "SaaS", "Business"],
    },
    {
      pic: Pic2,
      title: "Me.bot",
      description: "Turn your ideas into an AI life coach",
      upvotes: 382,
      comments: 220,
      categories: [
        "Productivity",
        "Artificial Intelligence",
        "Quantified Self",
      ],
    },
  ];

  return (
    <MantineProvider theme={theme}>
      <div className="mx-5 max-w-3xl md:ml-[18%] mt-10 ">
        <div className="border-b md:flex md:justify-between">
          <span className="text-2xl font-semibold mb-4">
            Top Products Launching Today
          </span>
          <div className="pt-3 flex text-sm md:justify-around items-start space-x-3 font-bold text-gray-500 mb-4">
            <span className="text-orange-500">Featured</span>
            <span className="text-gray-200 font-light">|</span>
            <span>All</span>
          </div>
        </div>

        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </MantineProvider>
  );
}
