import React, { useState } from 'react';

export default function Automation() {
  const [automations, setAutomations] = useState([
    { id: 1, name: 'Welcome Series', trigger: 'On Signup', status: 'Active' },
    {
      id: 2,
      name: 'Abandoned Cart',
      trigger: 'Cart Abandoned',
      status: 'Inactive',
    },
  ]);

  const [newAutomation, setNewAutomation] = useState({ name: '', trigger: '' });

  const addAutomation = (e) => {
    e.preventDefault();
    if (newAutomation.name && newAutomation.trigger) {
      setAutomations([
        ...automations,
        { ...newAutomation, id: Date.now(), status: 'Inactive' },
      ]);
      setNewAutomation({ name: '', trigger: '' });
    }
  };

  const toggleAutomationStatus = (id) => {
    setAutomations(
      automations.map((auto) =>
        auto.id === id
          ? { ...auto, status: auto.status === 'Active' ? 'Inactive' : 'Active' }
          : auto
      )
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-teal-600">
        Email Automation
      </h2>
      <form onSubmit={addAutomation} className="mb-6">
        <input
          type="text"
          placeholder="Automation Name"
          value={newAutomation.name}
          onChange={(e) =>
            setNewAutomation({ ...newAutomation, name: e.target.value })
          }
          className="border p-2 mr-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Trigger Event"
          value={newAutomation.trigger}
          onChange={(e) =>
            setNewAutomation({ ...newAutomation, trigger: e.target.value })
          }
          className="border p-2 mr-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
        >
          Add Automation
        </button>
      </form>
      <table className="w-full">
        <thead>
          <tr className="bg-teal-100">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Trigger</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {automations.map((automation) => (
            <tr key={automation.id} className="border-b">
              <td className="p-2">{automation.name}</td>
              <td className="p-2">{automation.trigger}</td>
              <td className="p-2">{automation.status}</td>
              <td className="p-2">
                <button
                  onClick={() => toggleAutomationStatus(automation.id)}
                  className={`px-2 py-1 rounded ${
                    automation.status === 'Active'
                      ? 'bg-red-500 text-white'
                      : 'bg-green-500 text-white'
                  }`}
                >
                  {automation.status === 'Active' ? 'Deactivate' : 'Activate'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
