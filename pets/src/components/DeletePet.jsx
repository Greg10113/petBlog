'use client';
// export default function DeletePet({id}){
// const id = params.id
//   const deletePet = async (props.params.id) => {
//     try {
//       const deletePet = await fetch(`http://localhost:9000/blog/${id}`, {
//         method: 'DELETE',
//       });
//       setTodos(todos.filter((todo) => todo.todo_id !== id));
//     } catch (err) {
//       console.error(err.message);
//     }
// }

// return (
//   <div>
//     <button onClick={deletePet}>Delete</button>
//     </div>
// )
// }

export default function DeletePet({ id }) {
  const deletePet = async (id) => {
    try {
      const deletePet = await fetch(`http://localhost:9000/blog/${id}`, {
        method: 'DELETE',
      });
      setPets(pets.filter((pet) => pet.pet_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div>
      <button onClick={() => deletePet(id)}>Delete</button>
    </div>
  );
}
