import React from 'react';


type PropsType = {
    tasks: TasksType[]
    children: React.ReactNode
}
type TasksType = {
    id: number,
    title: string,
    isDone: boolean,
}

export const SuperTodolist: React.FC<PropsType> = (props) => {
    const {tasks, children} = props
    return (
        <div>
            <ol>
                {tasks.map((t, idx) => {
                    return (
                        <li key={idx}>
                            <span>{t.id}</span>
                            <span>{t.title}</span>
                            <input type="checkbox" checked={t.isDone} readOnly/>
                        </li>
                    )
                })}
            </ol>
            {children}
        </div>
    );
}

