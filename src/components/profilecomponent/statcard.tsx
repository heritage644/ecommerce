function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm text-center">
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="text-xl font-semibold text-green-600">{value}</h3>
    </div>
  );
}
export default StatCard;