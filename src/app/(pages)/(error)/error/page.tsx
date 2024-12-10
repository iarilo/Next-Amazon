import PageNotAuthorized from "../PageNotAuthorized";
import  Link from "next/link"
const error = () => {
  return (
    <div>
        <h3 style={{color:"red"}}>Страница недоступна</h3>
      {/* <PageNotAuthorized/> */}
      <button>
        <Link href={'/'}> выход</Link>
      </button>
    </div>
  )
}

export default error
