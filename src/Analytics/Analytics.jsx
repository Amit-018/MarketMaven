import React from 'react';

export default function Analytics() {
  // Mock data for demonstration
  const campaigns = [
    { id: 1, name: 'Summer Sale', sent: 1000, opened: 450, clicked: 200 },
    { id: 2, name: 'New Product Launch', sent: 800, opened: 600, clicked: 350 },
    { id: 3, name: 'Customer Feedback', sent: 500, opened: 300, clicked: 100 },
  ];

  const calculateRate = (part, whole) => {
    return ((part / whole) * 100).toFixed(2) + '%';
  };

  const totalSent = campaigns.reduce((sum, campaign) => sum + campaign.sent, 0);
  const totalOpened = campaigns.reduce((sum, campaign) => sum + campaign.opened, 0);
  const totalClicked = campaigns.reduce((sum, campaign) => sum + campaign.clicked, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-teal-600">Campaign Analytics</h2>
      <table className="w-full mb-8">
        <thead>
          <tr className="bg-teal-100">
            <th className="p-2 text-left">Campaign Name</th>
            <th className="p-2 text-left">Sent</th>
            <th className="p-2 text-left">Opened</th>
            <th className="p-2 text-left">Clicked</th>
            <th className="p-2 text-left">Open Rate</th>
            <th className="p-2 text-left">Click Rate</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign.id} className="border-b">
              <td className="p-2">{campaign.name}</td>
              <td className="p-2">{campaign.sent}</td>
              <td className="p-2">{campaign.opened}</td>
              <td className="p-2">{campaign.clicked}</td>
              <td className="p-2">{calculateRate(campaign.opened, campaign.sent)}</td>
              <td className="p-2">{calculateRate(campaign.clicked, campaign.opened)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3 className="text-xl font-bold mb-4 text-teal-600">Overall Performance</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-teal-100 p-4 rounded">
            <h4 className="font-bold">Average Open Rate</h4>
            <p className="text-2xl">{calculateRate(totalOpened, totalSent)}</p>
          </div>
          <div className="bg-teal-100 p-4 rounded">
            <h4 className="font-bold">Average Click Rate</h4>
            <p className="text-2xl">{calculateRate(totalClicked, totalOpened)}</p>
          </div>
          <div className="bg-teal-100 p-4 rounded">
            <h4 className="font-bold">Total Emails Sent</h4>
            <p className="text-2xl">{totalSent}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
