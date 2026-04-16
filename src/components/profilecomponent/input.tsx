function Input({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-500">{label}
      <input
        defaultValue={value}
        className="mt-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
      />
      </label>
    </div>
  );
}

export default Input;