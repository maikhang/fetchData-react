import React from 'react'
import { Link } from 'react-router-dom';

export default function NavigationMenu(props) {
    return (
        <div>
            <ul>
                <li className="cursor-pointer">
                    <Link
                        to="/"
                        className="text-blue-500 cursor-pointer py-3 border-t border-b block pl-3"
                        onClick={props.closeMenu}
                    >
                        Homepage
                    </Link>
                </li>
                <li>
                    <Link
                        to="/product/:id"
                        className="text-blue-500 cursor-pointer py-3 border-b block pl-3"
                        onClick={props.closeMenu}
                    >
                        Product
                    </Link>
                </li>
            </ul>
        </div>
    )
}
