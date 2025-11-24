import React from "react";

interface PostCardProps {
  title: string;
  content: string;
  author?: string;
  date?: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  content,
  author,
  date,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{content}</p>
      {(author || date) && (
        <div className="text-sm text-gray-500">
          {author && <span>By {author}</span>}
          {author && date && <span> • </span>}
          {date && <span>{date}</span>}
        </div>
      )}
    </div>
  );
};

export default PostCard;
