import {Component} from "react";

export default class Separator extends Component {
    render() {
        return (
            <div className="grid grid-cols-6 lg:grid-cols-12 gap-2 flex flex-row items-center">
                <div className="lg:col-start-4 col-span-2 flex-1">
                    <hr className="border-grey-400"/>
                </div>

                <div className="col-span-2 text-center text-xl space-x-3 md:space-x-6 lg:space-x-12">
                    <i className="fas fa-star text-blue"></i>
                    <i className="fas fa-star text-blue"></i>
                    <i className="fas fa-star text-blue"></i>
                </div>

                <div className="lg:col-start-8 col-span-2 flex-1">
                    <hr className="border-grey-400"/>
                </div>
            </div>
        );
    }
}