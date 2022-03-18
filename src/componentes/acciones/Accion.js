
const Accion = () => {

    const deseos = ["Learn React",
                    "Climb Mt Everest",
                    "Run a marathon",
                    "Feed the dogs" ]
    return (
        <ul>
            
            {
            deseos.map( dream => {
                return (
                <li> 
                    {dream} 
                </li>
                );
            })
            }
            
        </ul>
    );
}

export default Accion;