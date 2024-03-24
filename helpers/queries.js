const APIColores = import.meta.env.VITE_API_COLOR;

export const leerColores = async ()=>{
    try {
        const respuesta = await fetch(APIColores);
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const obtenerColor = async(id)=>{
    try {
        const respuesta = await fetch(APIColores+'/'+id)
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const crearColor = async(nuevoColor)=>{

    try {
        const respuesta = fetch(APIColores, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(nuevoColor)    
        })
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const borrarColor = async(id)=>{
    try {
        const respuesta = fetch(APIColores+'/'+id,{
            method: "DELETE"
        })
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const editarColor = async(nuevosDatosColor, id)=>{
    try {
        const respuesta = await fetch(APIColores+'/'+id,{
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(nuevosDatosColor)
        })
        return respuesta
    } catch (error) {
        console.log(error)
    }
}