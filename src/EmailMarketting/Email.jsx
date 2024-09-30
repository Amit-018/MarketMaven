import React, { useState } from 'react';

export default function EmailDesigner() {
  const [emailContent, setEmailContent] = useState({
    subject: '',
    body: '',
  });

  const [preview, setPreview] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailContent({ ...emailContent, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email content to your backend
    console.log('Email content submitted:', emailContent);
    alert('Email design saved!');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-teal-600">Email Designer</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="subject" className="block mb-1">
            Subject Line:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={emailContent.subject}
            onChange={handleInputChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="body" className="block mb-1">
            Email Body:
          </label>
          <textarea
            id="body"
            name="body"
            value={emailContent.body}
            onChange={handleInputChange}
            className="w-full border p-2 rounded h-40"
            required
          ></textarea>
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
          >
            Save Design
          </button>
          <button
            type="button"
            onClick={() => setPreview(!preview)}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          >
            {preview ? 'Edit' : 'Preview'}
          </button>
        </div>
      </form>
      {preview && (
        <div className="mt-8 border p-4 rounded">
          <h3 className="text-xl font-bold mb-2">{emailContent.subject}</h3>
          <div className="whitespace-pre-wrap">{emailContent.body}</div>
        </div>
      )}
    </div>
  );
}
