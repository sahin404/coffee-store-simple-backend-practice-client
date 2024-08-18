import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  
  const { _id, name, chef, category, photo } = coffee;

  const handleDelete = (id) => {
    // console.log('delete', id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to restore this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const rem = coffees.filter(cof=>cof._id!=id);
              setCoffees(rem);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex w-full justify-between py-4">
          <div className="text-left mt-10">
            <h2 className="card-title">{name}</h2>
            <h1>Chef: {chef}</h1>
            <h1>Category: {category}</h1>
          </div>
          <div className="space-y-2 join join-vertical mt-4 mr-5">
            <button className="btn join-item">View</button>
            <Link to={`/update/${_id}`}><button className="btn join-item">Edit</button></Link>
            <button onClick={() => handleDelete(_id)} className="btn join-item">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes={
  coffee:PropTypes.object,
  coffees:PropTypes.object,
  setCoffees:PropTypes.object
}

export default CoffeeCard;
