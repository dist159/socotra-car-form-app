/** To avoid creating a style file I used the already integrated tailwind for this file*/
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <a
          href="/car-form/step-1"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Welcome
          </h5>
          <p className="font-normal text-gray-700">
            Click here to start the form
          </p>
        </a>
      </div>
    </main>
  );
}
