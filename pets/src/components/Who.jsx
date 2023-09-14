import './Who.css';
// import { images } from '../../next.config';

export default function Who() {
  return (
    <div className="m-auto justify-self-center rounded-lg border border-gray-300 grid grid-cols-2 h-1/2 w-5/6 overflow-y-clip  shadow-lg">
      <div className="p-7 align-middle  text-left m-auto   overflow-y-clip text-ellipsis ">
        <h2 className="font-bold text-xl mb-2">Who am I?</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          perferendis optio nisi ab quas, reiciendis hic animi unde deleniti
          fuga laudantium alias odit debitis autem itaque at, ipsam, asperiores
          suscipit? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Optio ipsa dolor rerum facere! Cupiditate voluptatem maxime tempora
          voluptatibus obcaecati aliquam amet, eaque dolores. Minima vero veniam
          mollitia reiciendis, assumenda voluptas.
        </p>
        {/* </div> */}
      </div>
      <div
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1617691763432-8b45e6748b71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlcHRpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="  m-auto text-black dark:text-slate-100 bg-slate-200 dark:bg-slate-900
     flex h-full w-full  justify-center   border-2 border-gray rounded-r-lg
    "
        // py-8 pt-10
      ></div>
      {/* <div className=" h-1/3 m-9 w-1/3 text-left overflow-y-clip  border-2 m-auto border-black p-5 text-black bg-white border-opacity-100 ">
          <h1 className="font-bold text-xl mb-2">Who are we?</h1>
          <p className=" text-base w-full m-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex
            deserunt amet ratione ut voluptate placeat dignissimos, excepturi
            minus ullam nisi veritatis iusto ipsa! Laboriosam vero ducimus fugit
            esse sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ad culpa quidem vitae? Fuga, distinctio eaque tenetur, voluptas,
            labore unde soluta cupiditate ut quibusdam necessitatibus eveniet
            magnam recusandae molestiae omnis corrupti!
          </p>
        </div> */}
    </div>
  );
}
