function Form(){
    
    function cadastrar(e){
        e.preventDefault()
        console.log('Cadastrar um Usuario')
    }

    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrar}>
                <div>
                    <input type="text" placeholder="Digite seu nome" />

                </div>

                <div>
                 <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form