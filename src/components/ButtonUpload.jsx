import { Link } from 'react-router-dom'

export default function ButtonUpload() {
    // const [open, setOpen] = useState(false)
    return (
        <div>
            <Link to={`/upload`}>
                <button className="bg-orange-600 text-white w-48 h-10 rounded-2xl cursor-pointer">
                    Upload
                </button>
            </Link>     
        </div>
    )
}