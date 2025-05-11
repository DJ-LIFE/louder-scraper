import HomePage from '@/pages/HomePage';

export default function Home() {
  return (
    <div>
      <main className="px-4 max-w-[90rem] mx-auto w-full mt-10">
        <h1 className="text-4xl font-bold text-left w-full">
          Upcoming Events in Australia
        </h1>
        <HomePage />
      </main>
    </div>
  );
}
