import React, {useContext, useMemo} from 'react';
import {ListContext} from '../App';

function UnFinishedList() {
    // @ts-ignore
    const {list, handleLiClick} = useContext(ListContext);

    //这里计算未完成的事件的个数，如果个数改变，打印出提示
    //这里主要是为了使用useMemo(useMemo和useCallback可以相互转换)
    var length = 0;
    // @ts-ignore
    list.map((item, i) => {
        if (!item.isDone) {
            length++;
        }
    });

    function speaking(length: number) {
        console.log(`未完成的事件发生了更新,目前还有${length}条事件待完成`);
    }

    //使用useMemo进行性能优化，否则已完成中的事件发生改变时，此函数也会执行
    useMemo(() => speaking(length), [length]);

    return (
        <>
            {/*这是未完成的*/}
            <h4>未完成</h4>
            <ul>
                {
                    // @ts-ignore
                    list.map((item, index) => {
                        if (!item.isDone) {
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

export default UnFinishedList;