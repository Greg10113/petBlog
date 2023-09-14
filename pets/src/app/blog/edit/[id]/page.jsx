'use client';
import './page.css';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function UpdatePet({ params }) {
  const id = params.id;
  const [image, setImg] = useState('');
  const [pet, setPet] = useState('');
  const [description, setDescription] = useState('');
  const [petid, setPetId] = useState('');

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { image, pet, description };

      const response = await fetch(`http://localhost:9000/blog/${petid}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      window.location = '/blog';
    } catch (err) {
      console.error(err.message);
    }
  };

  const getPets = async () => {
    try {
      const response = await fetch(`http://localhost:9000/blog/${id}`);
      const jsonData = await response.json();

      setPet(jsonData.pet);
      setDescription(jsonData.description);
      setImg(jsonData.image);
      setPetId(jsonData.pet_id);
      console.log(jsonData.image);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getPets();
  }, []);

  return (
    <div id="div" className="flex items-center h-screen w-screen ">
      <div className="container m-auto">
        <form className="mx-auto h-auto w-full max-w-lg bg-white shadow-md rounded px-4 pt-4 pb-5 mb-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Image
              <input
                className="
            shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline

            mb-8 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
                name="image"
                type="text"
                value={image}
                onChange={(e) => setImg(e.target.value)}
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
                className="mb-8 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
                name="pet"
                type="text"
                value={pet}
                onChange={(e) => setPet(e.target.value)}
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
                className=" mb-8 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <div className="flex justify-start">
              <span className="m-2 ">
                <button
                  onClick={onSubmitForm}
                  className="btn bg-gray-200 font-bold py-1 px-3 rounded hover:bg-gray-300 "
                >
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
