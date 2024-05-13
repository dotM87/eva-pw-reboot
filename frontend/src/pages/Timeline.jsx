import React from 'react';
import { useLocation } from 'react-router-dom';

const Timeline = () => {
  const location = useLocation();
  const { user } = location.state || { user: { name: 'Unknown', meetings: [] } };

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 py-8 text-white">
      <h1 className="text-3xl mb-8 font-bold text-center">Timeline - {user.name}</h1>
      {user.meetings.map((meeting, index) => (
        <div key={index} className="bg-gray-900 p-6 rounded-lg mb-6 shadow-lg">
          <div className="flex mb-4">
            <div className="w-1/6 text-left text-gray-400">
              <div className="text-lg font-semibold">{meeting.date}</div>
            </div>
            <div className="w-5/6 flex items-start justify-between">
              <div className="w-3/4 p-2 border rounded-md h-48 overflow-y-auto bg-gray-800 text-sm">
                <pre className="whitespace-pre-wrap leading-tight">{meeting.chat}</pre>
              </div>
              <div className="w-1/4 ml-4">
                <img src={meeting.image} alt="Imagen de la reunión" className="rounded-md h-48 w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;