import React, { useState } from 'react'

export default function Count() {

    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: "center" }}>
            <button onClick={() => setCount(count + 1)}>
                Click Plus
            </button>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count - 1)}>
                Click Down
            </button>
        </div>
    );

}
