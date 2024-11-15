export default (props)=>{
    return (
        <>
        <div className="flex items-center justify-center flex-col h-screen w-screen ">
    <div className="flex items-center justify-center flex-col gap-4 shadow-xl rounded-lg hover:-translate-y-3 transition-all duration-200 ">
            <img src="14pro.webp" alt="" height={500} width={500} />
            <h2 className="text-2xl font-bold">Iphone 14 pro</h2>
            <div className="flex items-center justify-center">
            <h3>Price:</h3><p>1999</p>
            <span>€</span>
            </div>
            <button className="flex items-center bg-black text-white font-bold px-4 py-2 rounded-lg hover:bg-gray-400 transition-all duration-200 m-6">Add</button>

    </div>
    </div>
        </>
    )
}