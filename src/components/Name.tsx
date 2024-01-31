import { useForm, SubmitHandler } from "react-hook-form"
import { useAppContext } from "../Context/AppContext"
type Inputs = {
    firstName: string
    lastName: string
}

export default function Name() {
    const { step, setStep } = useAppContext()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => setStep(step + 1)

    console.log(watch("firstName")) // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <p className='formHeading' >Personal Information</p>
            {/* register your input into the hook by invoking the "register" function */}
            <label htmlFor="">First Name</label>
            <input type="text" defaultValue="" {...register("firstName")} />

            {/* include validation with required or other standard HTML validation rules */}
            <label htmlFor="">Last Name Name</label>
            <input type="text" {...register("lastName", { required: true })} />
            {/* errors will return when field validation fails  */}
            {/* {errors.lastName && <span>This field is required</span>} */}

            <input type="submit" value="Continue" />
        </form>
    )
}