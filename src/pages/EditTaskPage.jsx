import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PopBrowse from '../components/popups/PopBrowse.jsx';

export default function EditTaskPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <PopBrowse
      mode="edit"
      onClose={() => navigate(-1)}
      onSave={() => navigate(`/card/${id}`)}
      onCancel={() => navigate(`/card/${id}`)}
      onDelete={() => navigate(-1)}
    />
  );
}
