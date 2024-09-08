'use client';

import { FaUser, FaCalendarAlt, FaListAlt, FaUsers, FaBookmark, FaPen } from 'react-icons/fa';
import { useState } from 'react';
import { type ActivityInfo } from '@/lib/definition'; // Import your activity data type

const PersonalPage = () => {
  const [name, setName] = useState('金大森');
  const [age, setAge] = useState(25);
  const [photo, setPhoto] = useState<string | null>(null);

  // Favorite activity with the requested image
  const [favoriteActivities, setFavoriteActivities] = useState<ActivityInfo[]>([
    {
      id: 1,
      name: 'Photography Workshop',
      image_url: 'https://www.tcb.tw/prod/news/1003/288c89a2-4d90-4f75-b54f-27a37a6e3724.jpg', // Custom image
    },
  ]);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setPhoto(URL.createObjectURL(file)); // Display the uploaded photo
    }
  };

  return (
    <div className="p-6 text-sm font-medium">
      {/* Profile Photo Section */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={photo || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="w-32 h-32 object-cover rounded-full mb-4"
        />
        <input type="file" accept="image/*" onChange={handlePhotoUpload} className="mb-4" />
        <h2 className="text-xl font-bold">{name}</h2>
        <p>Age: {age}</p>
      </div>

      {/* Favorite Activities (Card Layout) */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">My Favorite Activities</h3>
        <div className="grid gap-4">
          {favoriteActivities.map((activity) => (
            <div key={activity.id} className="relative flex flex-col w-full rounded-xl shadow-xl overflow-hidden">
              {/* Custom Image */}
              <img
                src={activity.image_url}
                alt={activity.name}
                className="w-full h-40 object-cover rounded-xl"
              />
              <div className="absolute top-2 right-2 text-black">
                <FaPen className="text-xl cursor-pointer" /> {/* Edit icon */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desired Activities (Box Layout) */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">Desired Activities</h3>
        <div className="grid gap-4">
          {favoriteActivities.map((activity) => (
            <div key={activity.id} className="relative flex flex-col w-full rounded-xl shadow-xl overflow-hidden">
              {/* Custom Image */}
              <img
                src={activity.image_url}
                alt={activity.name}
                className="w-full h-40 object-cover rounded-xl"
              />
              <div className="absolute top-2 right-2 text-black">
                <FaPen className="text-xl cursor-pointer" /> {/* Edit icon */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Activity History (Box Layout) */}
      <div className="mb-6">
        <div className="flex items-center border p-4 rounded-lg shadow-sm">
          <FaCalendarAlt className="text-2xl mr-4" />
          <div>
            <h3 className="text-xl font-bold">My Activity Participation</h3>
            <p>Hiking at Elephant Mountain, Photography Workshop</p> {/* Example text data */}
          </div>
        </div>
      </div>

      {/* Friends List (Box Layout) */}
      <div className="mb-6">
        <div className="flex items-center border p-4 rounded-lg shadow-sm">
          <FaUsers className="text-2xl mr-4" />
          <div>
            <h3 className="text-xl font-bold">My Friends</h3>
            <p>Alice, Bob</p> {/* Example text data */}
          </div>
        </div>
      </div>

      {/* Saved Activities (Box Layout) */}
      <div className="mb-6">
        <div className="flex items-center border p-4 rounded-lg shadow-sm">
          <FaBookmark className="text-2xl mr-4" />
          <div>
            <h3 className="text-xl font-bold">Saved Activities</h3>
            <p>Taipei Night Market Tour, Yoga Class in Daan Park</p> {/* Example text data */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalPage;
