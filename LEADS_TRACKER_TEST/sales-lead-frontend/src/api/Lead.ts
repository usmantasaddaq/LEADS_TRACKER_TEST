import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'http://localhost:8080/api/lead';

export interface Lead {
    id: number;
    name: string;
    email: string;
    status: string;
    estSaleAmount: number;
    estCommission: number;
}

export const fetchLeads = async (): Promise<Lead[]> => {
    try {
        const response: AxiosResponse<Lead[]> = await axios.get(`${BASE_URL}/all`);
        return response.data;
    } catch (error: any) {
        console.error('Failed to fetch leads:', error.message);
        throw error;
    }
};

export const createLead = async (leadData: Lead): Promise<Lead> => {
    try {
        const response: AxiosResponse<Lead> = await axios.post(BASE_URL, leadData);
        return response.data;
    } catch (error: any) {
        console.error('Failed to create lead:', error.message);
        throw error;
    }
};

export const updateLead = async (id: number, updatedLeadData: Lead): Promise<Lead> => {
    try {
        const response: AxiosResponse<Lead> = await axios.patch(`${BASE_URL}/${id}`, updatedLeadData);
        return response.data;
    } catch (error: any) {
        console.error('Failed to update lead:', error.message);
        throw error;
    }
};

export const deleteLead = async (id: string): Promise<void> => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error: any) {
        console.error('Failed to delete lead:', error.message);
        throw error;
    }
};
