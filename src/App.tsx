import React, {useState} from 'react';
import './App.css';
import {SuperButton} from "./SuperButton";
import {SuperTodolist} from "./SuperTodolist";

function App() {
    const tasks = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ]
    return (
        <div>
            {/*<SuperButton callback={() => console.log('red button')}>Red button</SuperButton>*/}

            <SuperTodolist tasks={tasks}>
                <SuperButton callback={() => console.log(1)} color={'red'}>First Red SuperButton</SuperButton>
                <SuperButton callback={() => console.log(2)} color={'secondary'}>Second Red SuperButton</SuperButton>
                <SuperButton callback={() => console.log(3)} disabled>Third Red SuperButton</SuperButton>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, tenetur.</p>
            </SuperTodolist>


            <SuperTodolist tasks={tasks}>
                <SuperButton callback={() => console.log(1)} color={'red'}>First Red SuperButton</SuperButton>
                <SuperButton callback={() => console.log(2)} color={'secondary'}>Second Red SuperButton</SuperButton>
                <SuperButton callback={() => console.log(3)} disabled>Third Red SuperButton</SuperButton>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis debitis distinctio in libero
                    nostrum odio repellat. A ab autem debitis deleniti deserunt dignissimos distinctio, excepturi modi
                    nemo nesciunt nobis numquam possimus rem vero vitae. Eaque eligendi nobis perspiciatis velit.</p>
                <input type="text"/>
                <input type="date"/>
            </SuperTodolist>

            <SuperTodolist tasks={tasks}>
                <SuperButton callback={() => console.log(1)} color={'red'}>First Red SuperButton</SuperButton>
            </SuperTodolist>

        </div>
    );
}

export default App;
