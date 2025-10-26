import { useState } from 'react';

export default function ProductDescription({ description }: { description: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full max-w-[394px] md:max-w-none mx-auto md:mx-0 px-4 md:px-0">
      <h3 className="text-lg font-semibold mb-2">Description</h3>
      <div className="text-[#8899A8] text-base leading-relaxed">
        {expanded ? description : `${description.slice(0, 150)}...`}
        {description.length > 150 && (
          <button 
            className="font-medium text-[#0C4B54] underline ml-2"
            onClick={() => setExpanded((x) => !x)}
          >
            {expanded ? "Show less" : "Read More.."}
          </button>
        )}
      </div>
    </div>
  );
}
