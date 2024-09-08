'use client';

import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const PersonalPage = () => {
  const [name, setName] = useState('Tina Weng');
  const [age, setAge] = useState(25);
  const [photo, setPhoto] = useState<string | null>(null);
  const [favoriteActivities, setFavoriteActivities] = useState<string[]>([]);
  const [desiredActivities, setDesiredActivities] = useState<string[]>([]);
  const [activityHistory, setActivityHistory] = useState<string[]>([
    'Hiking at Elephant Mountain',
    'Photography Workshop',
  ]);
  const [friends, setFriends] = useState<string[]>(['Alice', 'Bob']);
  const [savedActivities, setSavedActivities] = useState<string[]>([
    'Taipei Night Market Tour',
    'Yoga Class in Daan Park',
  ]);

  const handleAddFavorite = () => {
    // Placeholder for adding favorite activities
    // You can implement search or modal here later
    const newActivity = prompt('Search for an activity:');
    if (newActivity) setFavoriteActivities([...favoriteActivities, newActivity]);
  };

  const handleAddDesired = () => {
    // Placeholder for adding desired activities
    // You can implement search or modal here later
    const newActivity = prompt('Search for an activity:');
    if (newActivity) setDesiredActivities([...desiredActivities, newActivity]);
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Placeholder for uploading profile photo
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setPhoto(URL.createObjectURL(file));
    }
  };

  return (
    <div className="p-6">
      {/* Personal Information Section */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-32 h-32 mb-4">
          <img
            src={photo || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <input type="file" accept="image/*" onChange={handlePhotoUpload} />
        <h2 className="text-2xl mt-4">{name}</h2>
        <div className="text-lg">
          Age: 
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
            className="ml-2 border rounded px-2"
          />
        </div>
      </div>

      {/* Favorite Activities */}
      <div className="mb-6">
        <h3 className="text-xl mb-2">My Favorite Activities</h3>
        <div className="flex gap-2 flex-wrap">
          {favoriteActivities.map((activity, index) => (
            <span key={index} className="border px-3 py-1 rounded-lg">
              {activity}
            </span>
          ))}
          <button
            className="border px-3 py-1 rounded-lg flex items-center"
            onClick={handleAddFavorite}
          >
            <FaPlus className="mr-1" /> Add
          </button>
        </div>
      </div>

      {/* Desired Activities */}
      <div className="mb-6">
        <h3 className="text-xl mb-2">Activities I Want to Attend</h3>
        <div className="flex gap-2 flex-wrap">
          {desiredActivities.map((activity, index) => (
            <span key={index} className="border px-3 py-1 rounded-lg">
              {activity}
            </span>
          ))}
          <button
            className="border px-3 py-1 rounded-lg flex items-center"
            onClick={handleAddDesired}
          >
            <FaPlus className="mr-1" /> Add
          </button>
        </div>
      </div>

      {/* Activity History */}
      <div className="mb-6">
        <h3 className="text-xl mb-2">My Activity Participation</h3>
        <ul className="list-disc list-inside">
          {activityHistory.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>

      {/* Friends List */}
      <div className="mb-6">
        <h3 className="text-xl mb-2">My Friends</h3>
        <ul className="list-disc list-inside">
          {friends.map((friend, index) => (
            <li key={index}>{friend}</li>
          ))}
        </ul>
      </div>

      {/* Saved Activities */}
      <div className="mb-6">
        <h3 className="text-xl mb-2">Saved Activities</h3>
        <ul className="list-disc list-inside">
          {savedActivities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PersonalPage;
