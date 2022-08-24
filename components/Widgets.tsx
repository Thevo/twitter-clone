import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Widgets() {
  return (
    <div className="col-span-2 px-2 mt-2 hidden lg:inline max-h-screen overflow-scroll">
      {/* Search */}
      <div className="flex items-center space-x-2 bg-gray-100 p-3 mt-2 rounded-full mb-4">
        <SearchIcon className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="bg-transparent flex-1 outline-none"
        />
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="elonmask"
        options={{ height: 400 }}
      />
    </div>
  );
}

export default Widgets;
