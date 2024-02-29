import React from "react";
import { useNavigate } from "react-router-dom";

const AddPlace = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex container mx-auto justify-center place-items-center mt-12">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-2xl font-bold my-2">Add Place</h2>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                placeholder="Description"
                className="textarea textarea-bordered textarea-md w-full max-w-xs"
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Upload an Image</span>
              </label>
              <input type="file" accept="image/*" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                placeholder="Location"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary text-lg">Add Place</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPlace;
