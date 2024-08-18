import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Add = () => {
 const handleAddCoffee=e=>{
    e.preventDefault();
    const name = e.target.name.value;
    const chef = e.target.chef.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const suplier = e.target.suplier.value;
    const taste = e.target.taste.value;
    const photo = e.target.photo.value;
    const newCoffee = {name,chef,category, details,suplier,taste,photo};
    // console.log(newCoffee);
    fetch('http://localhost:5000/coffee',{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(newCoffee)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        Swal.fire({
          title: 'Added Successfully!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        e.target.reset();
      }
    });
   
 }
  return (
    <div className="mx-auto bg-gray-200 px-16 py-10 w-2/3">
     <Link to="/">Back to Home page</Link>
      <h1 className="text-center mb-5 text-3xl font-bold">Add a coffee</h1>
      <form onSubmit={handleAddCoffee}>
        {/* First Column */}
        <div className="flex gap-8 mb-6">
          <div className="w-full">
            <h1 className="text-lg">Name</h1>
            <input
              type="text"
              name="name"
              placeholder="Enter Coffee Name"
              className="w-full p-2"
            />
          </div>
          <div className="w-full">
            <h1 className="text-lg">Chef</h1>
            <input
              type="text"
              name="chef"
              placeholder="Enter Coffee Chef"
              className="w-full p-2"
            />
          </div>
        </div>
        {/* Second Column */}
        <div className="flex gap-8 mb-6">
          <div className="w-full">
            <h1 className="text-lg">Category</h1>
            <input
              type="text"
              name="category"
              placeholder="Enter Coffee Category"
              className="w-full p-2"
            />
          </div>
          <div className="w-full">
            <h1 className="text-lg">Details</h1>
            <input
              type="text"
              name="details"
              placeholder="Enter Coffee details"
              className="w-full p-2"
            />
          </div>
        </div>

        {/* Third Column */}
        <div className="flex gap-8 mb-6">
          <div className="w-full">
            <h1 className="text-lg">Suplier</h1>
            <input
              type="text"
              name="suplier"
              placeholder="Enter Coffee Suplier"
              className="w-full p-2"
            />
          </div>
          <div className="w-full">
            <h1 className="text-lg">Taste</h1>
            <input
              type="text"
              name="taste"
              placeholder="Enter Coffee Taste"
              className="w-full p-2"
            />
          </div>
        </div>
        {/* photo url */}
        <div>
            <h1>Photo URL</h1>
            <input className="w-full mb-6 p-2" type="text" name="photo" placeholder="Enter Photo URL" id="" />
        </div>
        {/* Button */}
        <input type="submit" value="Add Coffee" className="btn btn-block bg-black text-white"/>
      </form>
    </div>
  );
};

export default Add;
