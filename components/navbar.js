import {Component} from "react";

export default class Navbar extends Component {
    render() {
        return (
            <div className="bg-white">
                <div className="p-4 grid grid-cols-3">
                    <div className="flex flex-row items-center">

                    </div>

                    <div className="flex flex-row items-center justify-center">
                        <img className="h-8" src="/web-assets/nav-logo.png" />
                    </div>

                    <div className="flex flex-row-reverse items-center">
                        <a href="mailto:me@jackgledhill.com" className="text-xs rounded-full p-3 text-white bg-blue hover:bg-blue-600 focus:bg-blue-600 border-2 border-blue focus:border-blue-300">
                            <i className="fas fa-envelope"></i> Get in contact
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}