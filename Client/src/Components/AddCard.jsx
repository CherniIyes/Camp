import React,{useState} from 'react'
import axios from 'axios';
import '../Components/Add.css'

function AddCard() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setimage] = useState("");
    // const [data, setData] = useState([]);
const handleAdd = ()=>{
const obj = {
    "name": name,
    "price": price,
    "description": description,
    "image": image
  }
axios
.post("http://localhost:4000/api/addtool",obj)
.then(()=>{
    setName ("")
    setDescription("")
    setPrice("")
    setimage("")
})

}

return (
    <div className="containerr">
      <form className="form">
        <input placeholder="Name" value={name} type="text" onChange={(e) => setName(e.target.value)} />
        <input placeholder="Price" value={price} type="tewt" onChange={(e) => setPrice(e.target.value)} />
        <input placeholder="image" value={image} type="text" onChange={(e) => setimage(e.target.value)} />
        <input placeholder="Description" value={description} type="text" onChange={(e) => setDescription(e.target.value)} />

        <button onClick={handleAdd}>Submit</button>
      </form>
    </div>
  );
}


export default AddCard