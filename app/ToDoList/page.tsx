import React from 'react'
import List from '../components/List'
import Footer from '../components/Footer'
import Todolist from '../components/Todolist'
export default function page() {  // ✅ صح
    return (
        <div>
            <br />
            <div className="list">
                <List />
            </div>
            <div>
<Todolist/>
            </div>
            <div><Footer /></div>
        </div>
    )
}
