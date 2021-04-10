import React from 'react';

function Result() {
    const fetchData = async () => {
        const { data, status } = await axios.get(Const.EndPoint + "/" + identity);
        if (status === 200) {
            setMyData(data);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div>
            <h1>Welcome to Result Page!</h1>
        </div>
    );
}

export default Result;