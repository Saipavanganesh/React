import axios from "axios";

let token;
function Authorize() {
    return token = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
}
export const createNotes = async (obj) => {

    let response = await axios.post(
        "https://fundooapp.azurewebsites.net/api/Notes/notes",
        obj, Authorize()
    )
    console.log(response);
    return response;
}
export const getNotes = async () => {

    let response = await axios.get(
        "https://fundooapp.azurewebsites.net/api/Notes/notes",
        Authorize()
    )
    // console.log(response);
    return response;
}
export const trashNotes = async (id) => {
    let response = await axios.post(
        `https://fundooapp.azurewebsites.net/api/Notes/trash?notesId=${id}`,
        null,
        Authorize()
    )
    return response;
}
export const pinNotes = async (id) => {
    let response = await axios.post(
        `https://fundooapp.azurewebsites.net/api/Notes/pin?notesId=${id}`,
        null,
        Authorize()
    )
    return response;
}
export const archiveNotes = async (id) => {
    let response = await axios.post(
        `https://fundooapp.azurewebsites.net/api/Notes/archive?notesId=${id}`,
        null,
        Authorize()
    )
    return response;
}