interface Props {
    name:string, 
    background:string
}

function Button({name, background}:Props) {
  return (
    <div className="h-[150px] w-[300px] m-[100px] rounded-[10px] flex place-items-center justify-center" style={{backgroundColor: `${background}`}}>
        <p className="flex text-center text-5xl">{name}</p>
    </div>
  )
}

export default Button
