import React from 'react';
import { Lead } from '../api/Lead';

interface LeadPopupProps {
    lead: Lead;
    onClose: () => void;
}

const ViewLead: React.FC<LeadPopupProps> = ({ lead, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Lead Details</h2>
                <p><strong>Name:</strong> {lead.name}</p>
                <p><strong>Email:</strong> {lead.email}</p>
                <p><strong>Status:</strong> {lead.status}</p>
                <p><strong>Estimated Sale Amount:</strong> ${lead.estSaleAmount}</p>
                <p><strong>Estimated Commission:</strong> ${lead.estCommission}</p>
                <button
                    className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ViewLead;
