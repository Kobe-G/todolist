import React, {useContext} from 'react';
import {ListContext} from '../App';

function DoneList() {
    // @ts-ignore
    const {list, handleLiClick} = useContext(ListContext);

    return (
        <>
            <h4>已完成</h4>
            < ul>
                {
                    // @ts-ignore
                    list.map((item, index) => {
                        if (item.isDone) {
                            return <li key={index} onClick={() => handleLiClick(index)}>
                                {item.content}
                            </li>
                        }
                    })
                }
            </ul>
        </>
    )
}

export default DoneList;