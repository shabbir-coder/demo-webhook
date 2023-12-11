import axios from 'axios'

export const postMessage = async ( params={} , data={})=>{
    try {

        const response = await axios.get('https://come-back.co/api/send',{params:{...params,instance_id:'6576D67C9A021',access_token:'651f982e7e92c'}})
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
