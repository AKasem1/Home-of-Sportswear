export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Product ID: {params.id}</p>
    </div>
  );
}

