
import React from 'react';

interface Tag {
  id: string;
  name: string;
}

interface TagSelectorProps {
  tags: Tag[];
  activeTag: string | null;
  onChange: (tagId: string | null) => void;
}

const TagSelector: React.FC<TagSelectorProps> = ({ tags, activeTag, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2 p-4">
      <button
        className={`tag-selector ${!activeTag ? 'tag-selector-active' : ''}`}
        onClick={() => onChange(null)}
      >
        All
      </button>
      
      {tags.map((tag) => (
        <button
          key={tag.id}
          className={`tag-selector ${activeTag === tag.id ? 'tag-selector-active' : ''}`}
          onClick={() => onChange(tag.id)}
        >
          {tag.name}
        </button>
      ))}
    </div>
  );
};

export default TagSelector;
