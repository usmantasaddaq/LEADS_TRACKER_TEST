import React, { useState } from 'react';
import ViewLead from './ViewLead';
import UpdateLead from './UpdateLead';
import { deleteLead, updateLead } from '../api/Lead';

interface Lead {
    id: number;
    name: string;
    email: string;
    status: string;
    estSaleAmount: number;
    estCommission: number;
}

interface SalesLeadsProps {
    leads: Lead[];
    getData: () => void;
}

const LeadsTable: React.FC<SalesLeadsProps> = ({ leads, getData }) => {
    const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
    const [isViewPopupOpen, setViewPopupOpen] = useState(false);
    const [isUpdatePopupOpen, setUpdatePopupOpen] = useState(false);

    const handleViewLead = (lead: Lead) => {
        setSelectedLead(lead);
        setViewPopupOpen(true);
    };

    const handleUpdateLead = (lead: Lead) => {
        setSelectedLead(lead);
        setUpdatePopupOpen(true);
    };

    const handleClosePopup = () => {
        setSelectedLead(null);
        setViewPopupOpen(false);
        setUpdatePopupOpen(false);
    };
    const onDelete = async (id: any) => {
        await deleteLead(id);
        getData();
        alert('Lead Deleted Successfully!');
    }
    const onUpdate = async (id: any, updatedLeadData: any) => {
        await updateLead(id, updatedLeadData);
        getData();
        alert('Lead Updated Successfully!');
    }
    function getStatusBtn(status: string) {
        switch (status) {
            case 'UNQUALIFIED':
                return <span className="bg-red-500 text-white px-2 py-1 rounded-full">UNQUALIFIED</span>;
            case 'PROSPECT':
                return <span className="bg-blue-500 text-white px-2 py-1 rounded-full">PROSPECT</span>;
            case 'ACTIVE':
                return <span className="bg-green-500 text-white px-2 py-1 rounded-full">ACTIVE</span>;
            default:
                return <span className="bg-gray-500 text-white px-2 py-1 rounded-full">Other</span>;
        }
    }
    return (
        <div className="p-4">
            <table className="min-w-full table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2 bg-blue-500 text-white text-center">Name</th>
                        <th className="px-4 py-2 bg-blue-500 text-white text-center">Email</th>
                        <th className="px-4 py-2 bg-blue-500 text-white text-center">Status</th>
                        <th className="px-4 py-2 bg-blue-500 text-white text-center">Estimated Sale Amount</th>
                        <th className="px-4 py-2 bg-blue-500 text-white text-center">Estimated Commission</th>
                        <th className="px-4 py-2 bg-blue-500 text-white text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {leads.map((lead) => (
                        <tr key={lead.id}>
                            <td className="border px-4 py-2 text-center">{lead.name}</td>
                            <td className="border px-4 py-2 text-center">{lead.email}</td>
                            <td className="border px-4 py-2 text-center">{getStatusBtn(lead.status)}</td>
                            <td className="border px-4 py-2 text-center">${lead.estSaleAmount}</td>
                            <td className="border px-4 py-2 text-center">${lead.estCommission}</td>
                            <td className="border px-4 py-2 text-center">
                                <button
                                    className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    onClick={() => handleViewLead(lead)}
                                >
                                    View
                                </button>
                                <button
                                    className="px-4 py-2 mx-2 bg-green-500 text-white rounded hover:bg-green-600"
                                    onClick={() => handleUpdateLead(lead)}
                                >
                                    Update
                                </button>
                                <button
                                    className="px-4 py-2 mx-2 bg-red-500 text-white rounded hover:bg-red-600"
                                    onClick={() => onDelete(lead.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isViewPopupOpen && selectedLead && (
                <ViewLead lead={selectedLead} onClose={handleClosePopup} />
            )}

            {isUpdatePopupOpen && selectedLead && (
                <UpdateLead lead={selectedLead} onUpdate={onUpdate} onClose={handleClosePopup} />
            )}
        </div>
    );
};

export default LeadsTable;
