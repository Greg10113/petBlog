'use client';
import ShowPets from './PetsCard';
import '../app/blog/Blog.css';
import { useState, useEffect } from 'react';

export default function LatestPets() {
  const [pets, setPets] = useState([]);

  const deletePets = async (id) => {
    try {
      const deletePet = await fetch(`http://localhost:9000/blog/${id}`, {
        method: 'DELETE',
      });
      setPets(pets.filter((pet) => pet.pet_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getPets = async () => {
    try {
      const response = await fetch('http://localhost:9000/blog/latest');
      const jsonData = await response.json();

      setPets(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getPets();
  }, []);

  return (
    <div className="w-full h-1/6 ">
      <div className="justify-center grid gap-3 m-3  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {pets.map((p) => {
          return (
            <div className=" w-full h-full  ">
              <ShowPets
                //   image={!p.image ? image : p.image}
                time={p.created_at}
                image={p.image}
                pet={p.pet}
                description={p.description}
                id={p.pet_id}
                btn={deletePets}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
