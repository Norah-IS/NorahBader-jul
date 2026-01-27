'use client';
import React from "react";
import Link from "next/link";
export default function List() {
    return (
        <div className="list">
            <ul className="list flex gap-3">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/Projects">Projects</Link></li>
                <li><Link href="/expe">Experience</Link></li>
                <li><Link href="/ToDoList">To Do List</Link></li>


            </ul>

        </div>
    )
}
