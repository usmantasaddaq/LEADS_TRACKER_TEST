import React, { useState } from 'react';
import { Lead } from '../api/Lead';

interface UpdatePopupProps {
    lead: Lead;
    onUpdate: (id: number, updatedLead: any) => void;
    onClose: () => void;
}

const UpdateLead: React.FC<UpdatePopupProps> = ({ lead, onUpdate, onClose }) => {
    const [updatedLead, setUpdatedLead] = useState({ ...lead });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUpdatedLead((prevLead) => ({ ...prevLead, [name]: value }));
    };

    const handleSubmit = () => {
        onUpdate(lead.id, updatedLead);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Update Lead</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name:
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded py-2 px-3"
                        type="text"
                        name="name"
                        value={updatedLead.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email:
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded py-2 px-3"
                        type="email"
                        name="email"
                        value={updatedLead.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                        Status:
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded py-2 px-3"
                        type="text"
                        name="status"
                        value={updatedLead.status}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="estimatedSaleAmount">
                        Estimated Sale Amount:
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded py-2 px-3"
                        type="number"
                        name="estimatedSaleAmount"
                        value={updatedLead.estSaleAmount}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2"
                        onClick={handleSubmit}
                    >
                        Update
                    </button>
                    <button
                        className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateLead;
