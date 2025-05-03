import { useState, useEffect } from "react";

export default function Record({ id = null, onClose, refreshList }) {
  const [form, setForm] = useState({ name: "", position: "", level: "" });
  const [isNew, setIsNew] = useState(!id);

  useEffect(() => {
    async function fetchData() {
      if (!id) return;
      setIsNew(false);
      const response = await fetch(`http://localhost:5050/record/${id}`);
      if (!response.ok) {
        console.error(`Error: ${response.statusText}`);
        return;
      }
      const record = await response.json();
      setForm(record);
    }
    fetchData();
  }, [id]);

  function updateForm(value) {
    setForm((prev) => ({ ...prev, ...value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const url = isNew
        ? "http://localhost:5050/record"
        : `http://localhost:5050/record/${id}`;
      const method = isNew ? "POST" : "PATCH";
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setForm({ name: "", position: "", level: "" });
      onClose?.();          // Close modal or form
      refreshList?.();      // Re-fetch records list
    }
  }

  return (
    <form onSubmit={onSubmit} className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">
        {isNew ? "Create" : "Edit"} Employee Record
      </h3>
      {/* Name Input */}
      <label className="block text-sm font-medium text-slate-900">
        Name
        <input
          type="text"
          value={form.name}
          onChange={(e) => updateForm({ name: e.target.value })}
          className="w-full mt-1 p-2 border rounded"
          placeholder="First Last"
        />
      </label>

      {/* Position Input */}
      <label className="block text-sm font-medium text-slate-900 mt-4">
        Position
        <input
          type="text"
          value={form.position}
          onChange={(e) => updateForm({ position: e.target.value })}
          className="w-full mt-1 p-2 border rounded"
          placeholder="Software Engineer"
        />
      </label>

      {/* Level Radio Buttons */}
      <div className="mt-4">
        <span className="block text-sm font-medium text-slate-900">Level</span>
        {["Intern", "Junior", "Senior"].map((level) => (
          <label key={level} className="mr-4">
            <input
              type="radio"
              name="level"
              value={level}
              checked={form.level === level}
              onChange={(e) => updateForm({ level: e.target.value })}
              className="mr-1"
            />
            {level}
          </label>
        ))}
      </div>

      <button
        type="submit"
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save
      </button>
    </form>
  );
}
