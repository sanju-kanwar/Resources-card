const SortDropdown = ({ sortOption, setSortOption }) => (
  <select
    className="select cursor-pointer"
    value={sortOption}
    onChange={(e) => setSortOption(e.target.value)}
  >
    <option value="">Sort By</option>
    <option value="title">Title (A-Z)</option>
    <option value="duration">Duration (Short to Long)</option>
  </select>
);
export default SortDropdown;
