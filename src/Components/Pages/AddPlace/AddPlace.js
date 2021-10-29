
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddPlace = () => {
    const { register, handleSubmit,reset } = useForm();

    const onSubmit = data => {
        console.log(data);

         axios.post('http://localhost:5000/places', data)
             .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <form className="add-place-container" onSubmit={handleSubmit(onSubmit)}>
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