import { useForm, SubmitHandler } from "react-hook-form"
import { useAppContext } from "../Context/AppContext"
type Inputs = {
    password: string

}

export default function Password() {

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
    const onSubmit: SubmitHandler<Inputs> = (data) => setStep(step - 1)
    console.log(watch("password")) // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <p className='formHeading' > A Secured Password</p>
            {/* register your input into the hook by invoking the "register" function */}
            <label htmlFor="">Password</label>
            <input type="password" defaultValue="" {...register("password", { required: true })} />

            {/* include validation with required or other standard HTML validation rules */}
            {/* <input {...register("lastName", { required: true })} /> */}
            {/* errors will return when field validation fails  */}
            {/* {errors.lastName && <span>This field is required</span>} */}

            <input type="submit" />
            {handlePrevDisabled() ? "" : (<input disabled={handlePrevDisabled()} className='input_btn' type='submit' value='Previous' onClick={handlePrev} />)}
        </form>
    )
}