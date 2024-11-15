export default (props)=>{
    return(
<>
<div className="flex items-center justify-center h-screen w-screen flex-col hover:-translate-y-3 transition-all duration-200 ">
<div className="flex items-center justify-cetner flex-col gap-4 shadow-xl rounded-lg ">
     <img src="basic.jpg" alt=""  height={500} width={500}/>
    <h1 className="text-2xl font-bold">Iphone14 </h1>
    <div className="flex items-center justify-center flex-row">
    <h2>Price : </h2><p>300</p><span>£</span>
    </div>
    <button className="flex items-center bg-black font-bold px-6 py-2 rounded-lg text-white hover:bg-gray-400 transition-all duration-200 m-6">Add</button>

</div>
</div>

</>

    )
}