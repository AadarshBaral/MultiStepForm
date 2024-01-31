import { useForm, SubmitHandler } from "react-hook-form"
import { useAppContext } from "../Context/AppContext"

type Inputs = {
    email: string
}
export default function Email() {
    let { step, setStep } = useAppContext()
    const handlePrev = (): void => {
        step > 0 ? setStep(step -= 1) : "";
    }
    const handlePrevDisabled = (): boolean => {
        console.log(step)
        return step === 1;
    }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => setStep(step + 1);

    console.log(watch("email")) // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <p className='formHeading' >Your Email</p>
            {/* register your input into the hook by invoking the "register" function */}
            <label htmlFor="">Email Here</label>
            <input type="email" defaultValue="" {...register("email")} />

            {/* include validation with required or other standard HTML validation rules */}
            {/* errors will return when field validation fails  */}
            {/* {errors.lastName && <span>This field is required</span>} */}

            <input type="submit" value="Continue" />
            {handlePrevDisabled() ? "" : (<input disabled={handlePrevDisabled()} className='input_btn' type='submit' value='Previous' onClick={handlePrev} />)}
        </form>
    )
}