const ResourceCard = ({ resource, toggleLike }) => {
  const duration = resource.readTime || resource.duration;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
      {/* Thumbnail or Video */}
      {resource.type === "Video" ? (
        <iframe
          src={resource.videoUrl}
          title={resource.title}
          allowFullScreen
          className="w-full h-40"
        />
      ) : (
        <img
          src={resource.thumbnailUrl}
          alt={resource.title}
          className="w-full h-40 object-cover"
        />
      )}

      {/* Text content */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-1">{resource.title}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span className="mr-2">{resource.category}</span>
          <span>•</span>
          <span className="ml-2">{resource.type}</span>
        </div>
        <p className="text-xs text-gray-400 mb-4">
          {resource.readTime
            ? `${resource.readTime} min read`
            : `${resource.duration} min video`}
        </p>
        <button
          className={`mt-auto self-end text-2xl transition-colors ${
            resource.isLiked ? "text-pink-500" : "text-gray-300"
          } hover:text-pink-400`}
          onClick={() => toggleLike(resource.id)}
          aria-label="Like"
        >
          {resource.isLiked ? "💖" : "🤍"}
        </button>
      </div>
    </div>
  );
};

export default ResourceCard;
