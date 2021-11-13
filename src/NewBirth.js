import React from 'react'
import {useState} from 'react'

const NewBirth = ({people, setPeople}) => {
    const [newName,setNewName] = useState('')
    const [newAge, setNewAge] = useState('')
    const [newImage, setNewImage] = useState('')
    const [reminder, setReminder] = useState(false)

    const newAnniversary = (e) => {
        e.preventDefault()

        if(!newName || !newAge || !newImage) {
            alert('Please fill inall the boxes');
            return
        }

        setPeople([...people, {name: newName, age: newAge, image: newImage, reminder}])
        setNewName('')
        setNewAge('')
        setNewImage('')
        setReminder(false)
    }

    return ( 
    <form className="add-form" onSubmit={event => newAnniversary(event)}>
        <div className="form-control">
        <label>Add a name</label>
        <input type="text" placeholder="add name" value={newName} onChange={(e) => setNewName(e.target.value)}/>
        </div>
        <div className="form-control">
        <label>Add the age</label>
        <input type="text" placeholder="add age" value={newAge} onChange={(e) => setNewAge(parseInt(e.target.value))}/>
        </div>
        <div className="form-control">
        <label for="img">Paste your avatar in url format:</label>
        <input type="text" id="img" placeholder="add your avatar" value={newImage} onChange={(e) => setNewImage(e.target.value)}/>
        </div> 
        <div className="form-control form-control-check">
        <label>Reminder</label>
        <input className="reminder" type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input type="submit" value="Save Birthday" className="btn btn-block"/>
    </form>
    
 )

}


 export default NewBirth