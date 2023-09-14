'use client';

import PetsCard from '@/components/PetsCard';
import { useState, useEffect } from 'react';

export default function SoloPet({ params }) {
  const id = params.pet;
  const [pets, setPets] = useState([]);
  console.log(params.id);
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

  const getPets = async (id) => {
    try {
      const response = await fetch(`http://localhost:9000/blog/${id}`);
      const jsonData = await response.json();

      setPets(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getPets(id);
  }, []);
  console.log(id);
  return (
    <div>
      <PetsCard
        //   image={!p.image ? image : p.image}
        image={pets.image}
        pet={pets.pet}
        description={pets.description}
        id={pets.pet_id}
        btn={deletePets}
      />
    </div>
  );
}

// return (
//   <div className="w-screen ">
//     <div className="grid gap-3 m-3  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
//       {pets.map((p) => {
//         return (
//           <div className="w-full h-full ">

//           </div>
//         );
//       })}
//     </div>
//   </div>
// );
