import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const coffee = useLoaderData();
  const {_id, name, chef, category,details,suplier,taste, photo } = coffee;
  const handleAddCoffee = (e) => {
    e.preventDefault();
    Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
          const name = e.target.name.value;
          const chef = e.target.chef.value;
          const category = e.target.category.value;
          const details = e.target.details.value;
          const suplier = e.target.suplier.value;
          const taste = e.target.taste.value;
          const photo = e.target.photo.value;
          const newCoffee = { name, chef, category, details, suplier, taste, photo };
          // console.log(newCoffee);
          fetch(`http://localhost:5000/update/${_id}`, {
              method:'put',
              headers:{
                  'content-type':'application/json'
              },
              body: JSON.stringify(newCoffee)
          })
          .then(res=>res.json())
          .then(()=>{
            // e.target.reset();
          })
          
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });



   
  };
  return (
    <div className="mx-auto bg-gray-200 px-16 py-10 w-2/3">
      <Link to="/">Back to Home page</Link>
      <h1 className="text-center mb-5 text-3xl font-bold">Update Coffee</h1>
      <form onSubmit={handleAddCoffee}>
        {/* First Column */}
        <div className="flex gap-8 mb-6">
          <div className="w-full">
            <h1 className="text-lg">Name</h1>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Enter Coffee Name"
              className="w-full p-2"
            />
          </div>
          <div className="w-full">
            <h1 className="text-lg">Chef</h1>
            <input
              type="text"
              name="chef"
              defaultValue={chef}
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
              defaultValue={category}
              placeholder="Enter Coffee Category"
              className="w-full p-2"
            />
          </div>
          <div className="w-full">
            <h1 className="text-lg">Details</h1>
            <input
              type="text"
              name="details"
              defaultValue={details}
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
              defaultValue={suplier}
              placeholder="Enter Coffee Suplier"
              className="w-full p-2"
            />
          </div>
          <div className="w-full">
            <h1 className="text-lg">Taste</h1>
            <input
              type="text"
              name="taste"
              defaultValue={taste}
              placeholder="Enter Coffee Taste"
              className="w-full p-2"
            />
          </div>
        </div>
        {/* photo url */}
        <div>
          <h1>Photo URL</h1>
          <input
            className="w-full mb-6 p-2"
            type="text"
            name="photo"
            defaultValue={photo}
            placeholder="Enter Photo URL"
            id=""
          />
        </div>
        {/* Button */}
        <input
          type="submit"
          value="Update Coffee"
          className="btn btn-block bg-black text-white"
        />
      </form>
    </div>
  );
};

export default Update;
