import React from 'react'

const List = ({people, onToggle}) => {
    return (
       <>
    
      {people.map((person, id) =>  <article key={id} className={`person ${person.reminder ? "reminder" :""}`} onDoubleClick={() => onToggle(people.id)}>
        {/* if the person.reminder is true then we gonna have the class of reminder, else nothing. */}
        <img src={person.image} alt={person.name}/><div>
          <h4>{person.name}</h4>
          <p>{person.age} years</p>
        </div>
      </article>
     )
      }
    </>
    )
}

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


export default List
