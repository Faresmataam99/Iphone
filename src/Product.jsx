export default (props)=>{
    return(
<>

<div className="flex items-center justify-center h-screen w-screen flex-col hover:-translate-y-3 transition-all duration-200 shadow-xl">
     <img src={props.image} className="h-full w-full object-cover"/>
    <h1 className="text-2xl font-bold">{props.title}</h1>
    <div className="flex items-center justify-center flex-row">
    <h2>Starting at:</h2><p>{props.price}</p><span>€</span>
    </div>
    <button className="flex items-center bg-black font-bold px-6 py-2 rounded-lg text-white hover:bg-gray-400 transition-all duration-200 m-6">Add</button>
</div>
</>

    )
}