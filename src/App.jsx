import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import SortDropdown from './components/SortDropdown';
import ResourceList from './components/ResourceList';
import { resources as data } from './data/resources';
import './App.css'; // Assuming you have some global styles

export default function App() {
  const [resources, setResources] = useState([]);
  const [filters, setFilters] = useState({ category: 'All', type: 'All' });
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    setTimeout(() => setResources(data), 500); // simulate fetch
  }, []);

  const toggleLike = (id) => {
    setResources(prev =>
      prev.map(resource =>
        resource.id === id ? { ...resource, isLiked: !resource.isLiked } : resource
      )
    );
  };

  const filtered = resources.filter(r =>
    (filters.category === 'All' || r.category === filters.category) &&
    (filters.type === 'All' || r.type === filters.type)
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortOption === 'title') return a.title.localeCompare(b.title);
    if (sortOption === 'duration') return (a.readTime || a.duration) - (b.readTime || b.duration);
    return 0;
  });

  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
          <FilterBar filters={filters} setFilters={setFilters} />
          <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />
        </div>
        <ResourceList resources={sorted} toggleLike={toggleLike} />
      </main>
    </div>
  );
}
