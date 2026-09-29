import React from 'react';
import { useNavigate } from 'react-router-dom';
import PopNewCard from '../components/popups/PopNewCard.jsx';

export default function NewTaskPage() {
  const navigate = useNavigate();
  return <PopNewCard onClose={() => navigate(-1)} onCreate={() => navigate(-1)} />;
}
