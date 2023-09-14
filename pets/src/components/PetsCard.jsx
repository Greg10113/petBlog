'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import DeletePet from './DeletePet';

export default function PetsCard(props) {
  return (
    <Link rel="stylesheet" href={`/blog/show/${props.id}`}>
      <div className="m-auto w-full h-full flex justify-between flex-col max-w-sm  bg-white border rounded-lg overflow-hidden shadow-lg">
        <div className="mb-2 h-1/3 w-full">
          <img
            className="object-cover border h-48 w-96 items-start rounded-md  w-full object-cover"
            src={props.image}
          />
        </div>

        <div className=" p-3 h-1/3 flex flex-col justify-start m-auto text-ellipsis ">
          {/* <div className="my-4"> */}
          <div className="font-bold text-xl mb- text-lect">{props.pet}</div>

          <div className="h-min w-full text-left">
            <p className="h-min xs:line-clamp-3 sm:line-clamp-3 md:line-clamp-6 lg:line-cla,leading-relaxed text-white-700 text-base">
              {props.description}
            </p>
            {/* </div> */}
          </div>
        </div>

        <div className="mx-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">
            <Link href={`/blog/edit/${props.id}`}>
              <button>Edit</button>
            </Link>
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <button
              onClick={() => {
                props.btn(props.id);
              }}
            >
              Delete
            </button>
          </span>
        </div>
      </div>
    </Link>
  );
}
