import StatusBadge from "./statusbadge";

function OrderRow({
  id,
  date,
  items,
  price,
  status,
}: {
  id: string;
  date: string;
  items: string;
  price: string;
  status: string;
}) {
  return (
    <div className="flex justify-between items-center py-4">
      
      <div>
        <p className="font-medium">{id}</p>
        <p className="text-sm text-gray-500">
          {date} · {items}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <p className="font-medium">{price}</p>
        <StatusBadge status={status} />
      </div>
    </div>
  );
}
export default OrderRow;