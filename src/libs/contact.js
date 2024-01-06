import { BASE_API } from "../config";

const GetContact = async () => {
    const response = await fetch(`${BASE_API}/contact`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        }
    })
    return await response.json()
}
const AddContact = async (data) => {
    const response = await fetch(`${BASE_API}/contact`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    return await response.json()
}

const FetchContact = {
    GetContact,
    AddContact
}

export default FetchContact;