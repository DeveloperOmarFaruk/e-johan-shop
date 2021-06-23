import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { UserContext } from '../../App'
import './Shipment.css'

const Shipment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input
                    name='name'
                    defaultValue={loggedInUser.name}
                    {...register("name",
                        { required: true })}
                    placeholder='Your Name'
                    className="shipment-input" />
                {errors.name && <span className="shipment-error">Name is required</span>}


                <input
                    name='email'
                    defaultValue={loggedInUser.email}
                    {...register("email",
                        { required: true })}
                    placeholder='Your Email'
                    className="shipment-input" />
                {errors.email && <span className="shipment-error">Email is required</span>}

                <input
                    name='address'
                    {...register("address",
                        { required: true })}
                    placeholder='Your Address'
                    className="shipment-input" />
                {errors.address && <span className="shipment-error">Address is required</span>}


                <input
                    name='zip-code'
                    {...register("zip",
                        { required: true })}
                    placeholder='Your Zip-code'
                    className="shipment-input" />
                {errors.zip && <span className="shipment-error">Zip Code is required</span>}


                <input
                    name='phone number'
                    {...register("phone",
                        { required: true })}
                    placeholder='Your Phone Number'
                    className="shipment-input" />
                {errors.phone && <span className="shipment-error">Phone Number is required</span>}

                <input type="submit" />
            </form>
        </>
    )
}

export default Shipment
