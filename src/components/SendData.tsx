import React from 'react'
import { auth } from '../types/authType'
import {
  useMutation,
  QueryClient,
} from '@tanstack/react-query'
import { useAppContext } from '../Context/AppContext'
const queryClient = new QueryClient()
export default function SendData() {
  let { step, setStep } = useAppContext()
  let firstName = localStorage.getItem("firstName")
  let lastName = localStorage.getItem("lastName")
  let email = localStorage.getItem("email")
  let password = localStorage.getItem("password")

  let mergedData: auth = {
    firstName,
    lastName,
    email,
    password
  }

  const mutation = useMutation({
    mutationFn: async (dt) => {
      const response = await fetch(
        "https://rest-api-bjno.onrender.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dt)
        }
      )
    },
    onSuccess: () => {
      console.log("registration success")
      queryClient.invalidateQueries({ queryKey: ['auth'] })
      localStorage.setItem("firstName", "")
      localStorage.setItem("lastName", "")
      localStorage.setItem("email", "")
      localStorage.setItem("password", "")
      setStep(1)

    },
    onError: () => {
      console.error('Error!!!!!');
    }
  })
  return (
    <div>
      <button className="finalSubmit submit-green" onClick={(event: React.MouseEvent<HTMLElement>) => {
        mutation.mutate(mergedData)
      }}>Create</button>
    </div>
  )
}
