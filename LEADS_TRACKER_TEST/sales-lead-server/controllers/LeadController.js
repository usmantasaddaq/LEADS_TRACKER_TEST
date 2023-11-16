import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const getLeads = async (req, res) => {
    try {
        const leads = await client.lead.findMany();
        res.json(leads);
    } catch (error) {
        res.status(500).json({ error: 'An Error occured' });
    } finally {
        await client.$disconnect();
    }
};

export const createLead = async (req, res) => {
    try {
        const { name, email, estSaleAmount, status } = req.body;

        const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!reg.test(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        let commission = 0;
        if (status !== 'UNQUALIFIED') {
            commission = estSaleAmount * 0.05;
        }

        const newLead = await client.lead.create({
            data: {
                name,
                email,
                estSaleAmount,
                status,
                estCommission: commission,
            },
        });

        res.status(201).json({ message: 'Lead created successfully', lead: newLead });
    } catch (error) {
        console.error('Error creating lead:', error);
        res.status(500).json({ error: 'Internal server error' });
    } finally {
        await client.$disconnect();
    }
}

export async function getLeadById(req, res) {
    const { id } = req.params;
    try {
        const lead = await client.lead.findUnique({
            where: { id: parseInt(id) },
        });
        if (!lead) {
            return res.status(404).json({ error: 'Error occuured: Lead not found' });
        }
        res.status(200).json({ lead });
    } catch (error) {
        console.error('Error occuured:', error);
        res.status(500).json({ error: 'Internal server error' });
    } finally {
        await client.$disconnect();
    }
}

export async function updateLead(req, res) {
    const { id } = req.params;
    const { name, email, estSaleAmount, status } = req.body;

    try {
        const lead = await client.lead.findUnique({
            where: { id: parseInt(id) },
        });

        if (!lead) {
            return res.status(404).json({ error: 'Error occured: Lead not found' });
        }

        const updatedLead = await client.lead.update({
            where: { id: parseInt(id) },
            data: {
                name,
                email,
                estSaleAmount,
                status
            },
        });

        res.status(200).json({ message: 'Lead updated successfully', lead: updatedLead });
    } catch (error) {
        console.error('Error updating lead:', error);
        res.status(500).json({ error: 'Internal server error' });
    } finally {
        await client.$disconnect();
    }
}

export async function deleteLead(req, res) {
    const { id } = req.params;

    try {
        const lead = await client.lead.findUnique({
            where: { id: parseInt(id) },
        });

        if (!lead) {
            return res.status(404).json({ error: 'Error occured: Lead not found' });
        }

        await client.lead.delete({
            where: { id: parseInt(id) },
        });

        res.status(200).json({ message: 'Lead deleted successfully!' });
    } catch (error) {
        console.error('Error deleting lead:', error);
        res.status(500).json({ error: 'Internal server error' });
    } finally {
        await client.$disconnect();
    }
}
