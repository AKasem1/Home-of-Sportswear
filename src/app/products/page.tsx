import Header from '@/components/layout/Header';
import BrandFilter from '@/components/products/BrandFilter';

export default function ProductsPage() {
  return (
    <div>
      <Header
        title="Men's Wear"
        showBackButton={true}
        showCartButton={true}
      />
      <BrandFilter />
    </div>
  );
}

