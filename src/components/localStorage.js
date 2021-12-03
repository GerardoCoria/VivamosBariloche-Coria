import { useState } from "react"

const GuardarStorage = (key, valorInicial) =>{
    const [valor, setValor] = useState(() => {
        const item = localStorage.getItem(key)
        return item ? JSON.parse(item) : valorInicial
    })
    const setValores = (valores) => {
        setValor(valores)
        localStorage.setItem(key, JSON.stringify(valores))
    }
    return [valor, setValores]
}
export default GuardarStorage