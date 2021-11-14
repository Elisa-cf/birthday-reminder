import React from 'react'
import { FaTimes } from 'react-icons/fa'

const List = ({people, onToggle, onDelete}) => {
    return (
       <>
    
      {people.map((person, id) =>  <article key={id} className={`person ${person.reminder ? "reminder" :""}`}  onDoubleClick={() => onToggle(people.id)}>
        {/* but default class person but sif the person.reminder is true then we gonna have the class of reminder, else nothing. */}
        <img src={person.image} alt={person.name}/><div>
          <h4>{person.name}<FaTimes style ={{color:'#1AA179', cursor:'pointer', fontSize:'18px'}}  onClick={() => onDelete(people.id)}/></h4>
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

// 


export default List
