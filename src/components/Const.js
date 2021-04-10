import axios from 'axios';

const EndPoint = "https://jsonbox.io/box_169aa6b45b83d99b8663";

const ClearDuplicate = async () => {
    const { data, status } = await axios.get(EndPoint);
    console.log(data);

    //const { data2, status2 } = await axios.delete(EndPoint + "?q=identity:" + "alex1");

    // let currentId = data[1].identity;
    // for (let i = 2; i < data.length; i++) {
    //     if (data[i].identity === currentId) {
    //         const { data2, status2 } = await axios.delete(EndPoint + "?q=identity:" + currentId);
    //         if (status2 === 200) {
    //             console.log("deleted")
    //         }
    //     }
    // }
};

const Questions = (skillArray) => {
    if (skillArray[1] === "coding") {
        return (
            [
                [1, "I've just started but I know the basics of " + skillArray[0]],
                [2, "I have taken a class in " + skillArray[0]],
                [3, "I have used " + skillArray[0] + " consistently for about a year"],
                [4, "I have spen 2+ years using " + skillArray[0] + " consistently"],
                [5, "I have completed a capstone or equivelent size project in " + skillArray[0]]
            ]
        );
    } else if (skillArray[1] === "analysis") {
        return (
            [
                [1, "I've just started but I know the basics of " + skillArray[0]],
                [2, "I have used " + skillArray[0] + " in one of my classes"],
                [3, "I have used " + skillArray[0] + " in a few of my classes"],
                [4, "I have spen 2+ years using " + skillArray[0] + " consistently"],
                [5, "I have completed large projects using " + skillArray[0] + " or used it in past internships"]
            ]
        );
    } else if (skillArray[1] === "marketing") {
        return (
            [
                [1, "I've never used " + skillArray[0] + ", but understand the basics"],
                [2, "We discussed " + skillArray[0] + " in my classes and how to use it, but I don't have hands one experience"],
                [3, "I have used " + skillArray[0] + " on my own, but not in actual campaigns"],
                [4, "I have used " + skillArray[0] + " in small scale campaigns (less than 1000$)"],
                [5, "I haved used " + skillArray[0] + " in Large scale campaigns (more than 1000$)"]
            ]
        );
    } else if (skillArray[1] === "general") {
        return (
            [
                [1, "I've just started but I know the basics of " + skillArray[0]],
                [2, "I have taken a class in " + skillArray[0]],
                [3, "I have used " + skillArray[0] + " consistently for about a year"],
                [4, "I have spen 2+ years using " + skillArray[0] + " consistently"],
                [5, "I am an advance users who knows all the shortcuts and am a powerusers"]
            ]
        );
    }
}

const Const = {
    EndPoint: EndPoint,
    ClearDuplicate: ClearDuplicate,
    Questions: Questions,
}



export default Const;