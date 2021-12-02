import React from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";

const List = ({ people, onToggle, refetchBirthdays }) => {
  const deleteBirthdayHandler = (id) => {
    axios
      .delete(`http://localhost:8000/birthday/${id}`)
      .then(() => refetchBirthdays());
  };

  // axios
  //   .delete(`http://localhost:8000/birthday/${id}`)
  //   .then((response) => {
  //     console.log(response.status);
  //   })
  //   .catch((e) => console.log("something went wrong!", e));

  return (
    <>
      {people.map((person, id) => (
        <article
          key={id}
          className={`person ${person.reminder ? "reminder" : null}`}
          onDoubleClick={() => onToggle()}
        >
          {/* but default class person but if the person.reminder is true then we gonna have the class of reminder, else nothing. */}
          <img src={person.url} alt={person.name} />
          <div>
            <h4>
              {person.name}
              <FaTimes
                style={{
                  color: "#1AA179",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
                onClick={() => deleteBirthdayHandler(person.id)}
              />
            </h4>
            <p>{person.age} years</p>
          </div>
        </article>
      ))}
    </>
  );
};

// const List = ({people, onToggle}) => {
//     return (
//        <>

//       {people.map((person, id) =>  <article key={id} className="person">
//         <img src={person.image} alt={person.name}/><div>
//           <h4>{person.name}</h4>
//           <p>{person.age} years</p>
//         </div>
//       </article>
//      )
//       }
//     </>
//     )
// }

//

export default List;
