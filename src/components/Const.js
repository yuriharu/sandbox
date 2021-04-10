import axios from 'axios';

const EndPoint = "https://jsonbox.io/box_169aa6b45b83d99b8663";

const ClearDuplicate = async () => {
    const { data, status } = await axios.get(EndPoint);
    console.log(data);

    // let currentId = data[1].identity;
    // for (let i = 2; i < data.length; i++) {
    //     if (data[i].identity === currentId) {
    //         const { data2, status2 } = await axios.delete(EndPoint + "?q=identity:" + currentId);
    //         if (status2 === 200) {
    //             console.log("deleted")
    //         }
    //     }
    // }

    // const { data, status } = await axios.delete(EndPoint);
    //     if (status === 200 && data.length === 0) {
    //         const newPerson = { identity: identity };
    //         const { data, status } = axios.post(Const.EndPoint, newPerson);
    //         alert("You are new!");
    //     } else {
    //         alert("You already exist!")
    // }
};

const Const = {
    EndPoint: EndPoint,
    ClearDuplicate: ClearDuplicate,
}



export default Const;