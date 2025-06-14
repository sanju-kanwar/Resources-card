const FilterBar = ({ filters, setFilters }) => (
  <>
    <select
      className="select cursor-pointer"
      value={filters.category}
      onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
    >
      <option value="All">All Categories</option>
      <option value="Math">Math</option>
      <option value="English">English</option>
    </select>
    <select
      className="select cursor-pointer"
      value={filters.type}
      onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
    >
      <option value="All">All Types</option>
      <option value="Video">Video</option>
      <option value="Article">Article</option>
    </select>
  </>
);
export default FilterBar;
