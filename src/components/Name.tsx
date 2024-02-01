import { useForm, SubmitHandler } from "react-hook-form"
import { useAppContext } from "../Context/AppContext"
type Inputs = {
    firstName: string
    lastName: string
}

export default function Name() {

    // let firstName = ""
    // let lastName = ""
    // if (localStorage.getItem("name")) {
    //     let { firstName, lastName } = JSON.parse(localStorage.getItem("name"));
    //     console.log("ok")
    // } else {
    //     let firstName = ""; let lastName = "";
    // }
    let firstName = localStorage.getItem("firstName")
    let lastName = localStorage.getItem("lastName")

    const { step, setStep } = useAppContext()
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {

        localStorage.setItem("firstName", data.firstName)
        localStorage.setItem("lastName", data.lastName)
        setStep(step + 1)
    }
    // console.log(watch("firstName")) // watch input value by passing the name of it

    return (

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <p className='formHeading' >Personal Information</p>

            <label>First Name</label>
            <input className={errors.firstName ? "error" : ""} type="text" defaultValue={firstName ? firstName : ""} {...register("firstName", { required: true })} />
            <label htmlFor="">Last Name Name</label>
            <input className={errors.lastName ? "error" : ""} defaultValue={lastName ? lastName : ""} type="text" {...register("lastName", { required: true })} />
            {/* errors will return when field validation fails */}
            {/* {errors.lastName && <span>This field is required</span>} */}
            <br />
            <input type="submit" value="Continue" />
        </form>
    )
}