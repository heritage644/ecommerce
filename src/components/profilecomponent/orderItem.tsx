function OrderItem({
  name,
  price,
  status,
}: {
  name: string;
  price: string;
  status: string;
}) {
  return (
    <div className="flex justify-between items-center border-b pb-2">
      <div>
        <p className="font-medium text-gray-700">{name}</p>
        <span className="text-sm text-gray-500">{status}</span>
      </div>
      <p className="text-green-600 font-semibold">{price}</p>
    </div>
  );
}
export default OrderItem;