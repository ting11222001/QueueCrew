interface Props {
    name:string, 
    background:string
    link:string
}

function Button({name, background, link}:Props) {
  return (
    <a href={link}>
      <div className="transition ease-in-out hover:scale-105 h-[150px] w-[300px] m-[100px] rounded-[10px] drop-shadow-lg flex place-items-center justify-center" style={{backgroundColor: `${background}`}}>
          <p className="flex text-center text-5xl">{name}</p>
      </div>
    </a>

  )
}

export default Button
