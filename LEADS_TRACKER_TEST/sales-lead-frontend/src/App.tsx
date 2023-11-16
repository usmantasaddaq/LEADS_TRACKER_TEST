import React, { useEffect, useState } from 'react';
import LeadsTable from './components/LeadsTable';
import { Lead, fetchLeads } from './api/Lead';

const App: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const getData = async () => {
    const data: Lead[] = await fetchLeads();
    if (data) {
      setLeads(data);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1 className="text-3xl font-semibold text-center my-4">Minimalist Sales Lead Tracking System</h1>
      <LeadsTable leads={leads} getData={getData} />
    </div>
  );
};

export default App;
