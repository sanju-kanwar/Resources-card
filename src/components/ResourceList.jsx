import ResourceCard from './ResourceCard';

const ResourceList = ({ resources, toggleLike }) => (
  <div className="flex justify-center">
    {resources.length === 0 ? (
      <div className="text-gray-500 text-lg mt-8">No resources found.</div>
    ) : (
      <div className="w-full bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            toggleLike={toggleLike}
          />
        ))}
      </div>
    )}
  </div>
);

export default ResourceList;
