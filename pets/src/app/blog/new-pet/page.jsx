'use client';
// import './page.css';
import { useState } from 'react';
import Blog from '@/components/LatestPets';

export default function NewPet() {
  const [image, setImg] = useState('');
  const [pet, setPet] = useState('');
  const [description, setDescription] = useState('');

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { image, pet, description };
      const response = await fetch('http://localhost:9000/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      window.location = '/blog';
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div id="div" className="flex items-center h-screen w-screen ">
      <div className="container m-auto">
        <form
          onSubmit={onSubmitForm}
          className="mx-auto h-auto w-full max-w-lg bg-white shadow-md rounded px-4 pt-4 pb-5 mb-4"
        >
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Image
              <input
                value={image}
                onChange={(e) => setImg(e.target.value)}
                className="
            shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline

            mb-8 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
                name="image"
                type="text"
              />
            </label>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pet"
            >
              Pet
              <input
                value={pet}
                onChange={(e) => setPet(e.target.value)}
                className="mb-8 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
                name="pet"
                type="text"
              />
            </label>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor=""
            >
              Description
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className=" mb-8 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
                type="text"
              />
            </label>
            <div className="flex justify-start">
              <span className="m-2 ">
                <button className="btn bg-gray-200 font-bold py-1 px-3 rounded hover:bg-gray-300 ">
                  Submit
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
