import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PopBrowse from '../components/popups/PopBrowse.jsx';

export default function ViewTaskPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <PopBrowse
      mode="view"
      onClose={() => navigate(-1)}
      onEdit={() => navigate(`/card/${id}/edit`)}
      onDelete={() => navigate(-1)}
    />
  );
}
