
import React from 'react';
import { useParams } from 'react-router-dom';

const WorkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="h-screen w-full bg-stone-custom text-text-dark font-sans p-8">
      <h1 className="text-4xl">Work Detail Page</h1>
      <p>Details for work ID: {id}</p>
    </div>
  );
};

export default WorkDetail;
