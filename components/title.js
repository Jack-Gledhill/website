import {Component} from "react";

export class CenterTitle extends Component {
    render() {
        return (
            <p className="font-bold text-5xl text-center mb-8">
                {this.props.children}
            </p>
        );
    }
}

export class LeftTitle extends Component {
    render() {
        return (
            <p className="font-bold text-5xl text-left mb-8">
                {this.props.children}
            </p>
        );
    }
}

export class RightTitle extends Component {
    render() {
        return (
            <p className="font-bold text-5xl text-right mb-8">
                {this.props.children}
            </p>
        );
    }
}