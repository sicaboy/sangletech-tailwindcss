import React from "react";
import Link from "next/link";

function Button(props) {
  return (
    <div>
      <Link href={props.url}>
        <button className="btn btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block w-6 h-6 mr-2 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {props.name}
        </button>
      </Link>
    </div>
  );
}

export default Button;
