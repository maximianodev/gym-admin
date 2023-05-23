import { FcGoogle } from 'react-icons/fc'

export const Login: React.FC = () => {
  return (
    <div>
      <p>
        <strong>Faça o login para continuar</strong>
      </p>

      <button type="button" className="bg-white rounded-md p-1 mx-auto block mt-4">
        <FcGoogle size={"48px"} />
      </button>
    </div>
  )
}
