'use client';
import { EventCard, EventCradProp } from '@/components/EventCard';
import Skeleton from '@/components/Skeleton';
import axios from 'axios';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [data, setData] = useState<EventCradProp[]>([]);
  const [loading, setLoading] = useState(true);
  const [popup, setPopup] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventCradProp | null>(
    null
  );
  const [email, setEmail] = useState('');

  const fetchEvents = async () => {
    const response = await axios.get('https://louder-scraper-backend.vercel.app/api/events');
    return response.data;
  };

  useEffect(() => {
    const res = fetchEvents();
    res
      .then((events) => {
        setData(events.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
        setLoading(false);
      });
  }, []);

  const handleCardClick = (event: EventCradProp) => {
    setSelectedEvent(event);
    setPopup(true);
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedEvent?.link) {
      window.open(selectedEvent.link, '_blank');
      setPopup(false);
    } else {
      console.error('Event link is undefined');
    }
    setEmail('');
  };

  return (
    <div >
      {loading ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4'>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4">
          {data.map((event: EventCradProp, index) => (
            <EventCard
              key={index}
              data={event}
              onClick={() => handleCardClick(event)}
            />
          ))}
        </div>
      )}
      {popup && selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-neutral-200 bg-opacity-50">
          <form
            className="bg-white p-6 rounded shadow-lg h-60 w-80 relative"
            onSubmit={onSubmit}
          >
            <button
              className="absolute top-6 right-6 cursor-pointer"
              onClick={() => setPopup(false)}
            >
              X
            </button>
            <div className="flex flex-col items-start">
              <label
                htmlFor="email"
                className="text-neutral-600 font-medium text-lg"
              >
                Enter Your email
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 p-2 border border-neutral-400 rounded w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="mt-4 cursor-pointer bg-purple-500 font-semibold text-neutral-100 py-2 px-4 rounded"
            >
              Get Ticket
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default HomePage;
