
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddPlace = () => {
    const { register, handleSubmit,reset } = useForm();

    // add place to database
    const onSubmit = data => {
         axios.post('https://sheltered-depths-95295.herokuapp.com/places', data)
             .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };

    return (
        // add place route
        <div className="d-flex justify-content-center align-items-center">
            <form className="add-place-container md-w-100" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Place Name" {...register("name")} />
                <textarea placeholder="Some Text About The Place" {...register("desc")} />
                <input placeholder='Booking Rate' {...register("rate")} />
                <input placeholder="Image URL" {...register("img")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddPlace;