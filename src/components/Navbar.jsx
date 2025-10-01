export default function Nav() {
    return (
        <div className="flex justify-between items-center h-18 bg-zinc-800 p-2">
            <ul>
                <li className="text-orange-600 text-2xl font-bold">MyMatch History</li>
            </ul>
            <input type="text" className="border w-3xl h-3/4 border-gray-400 rounded-2xl text-gray-300 placeholder-gray-400 p-2" placeholder="ค้นหา"/>
            <div className="w-8">
                <img src="
                https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png" alt="" />
            </div>
        </div>
    )
}