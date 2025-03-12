import Hero from "@/components/Hero";
import DealsSection from "@/components/DealsSection";
import CategoriesSection from "@/components/CategoriesSection";
import ProductGrid from "@/components/ProductGrid";
import RecommendedProducts from "@/components/RecommendedProducts";

export default function Home() {
  return (
    <main>
            <div className="mb-16"> {/* Adds 128px spacing after RecommendedProducts */}

      <Hero />
      </div>
      <div className="mb-16"> {/* Adds 128px spacing after RecommendedProducts */}

      <DealsSection />
      </div>
      <div className="mb-16"> {/* Adds 128px spacing after RecommendedProducts */}

      <CategoriesSection />
      </div>

      <div className="mb-16"> {/* Adds 128px spacing after RecommendedProducts */}

      <RecommendedProducts />    
        </div>

      <div className="mb-16"> {/* Adds 128px spacing after RecommendedProducts */}

       <ProductGrid />
       </div>
    </main>
  );
}
