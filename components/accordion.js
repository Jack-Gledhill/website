import {Component} from "react";
import {
    Accordion as AccordionBase,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemState
} from "react-accessible-accordion";

export default class Accordion extends Component {
    makeItems() {
        let items = [];

        Object.keys(this.props.items).forEach((qu, i) => {
            if (i + 1 !== Object.keys(this.props.items).length) {
                items.push(
                    <AccordionItem className="border-b border-grey-400 space-y-4 p-4">
                        <AccordionHeader>
                            {qu}
                        </AccordionHeader>

                        <AccordionItemPanel>
                            <p>{this.props.items[qu]}</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                );
            } else {
                items.push(
                    <AccordionItem className="space-y-4 p-4">
                        <AccordionHeader>
                            {qu}
                        </AccordionHeader>

                        <AccordionItemPanel>
                            <p>{this.props.items[qu]}</p>
                        </AccordionItemPanel>
                    </AccordionItem>
                );
            }
        })

        return items;
    }

    render() {
        return (
            <AccordionBase className="border border-grey-400 bg-white rounded-lg" style={this.props.style} allowZeroExpanded={true} allowMultipleExpanded={true}>
                {this.makeItems()}
            </AccordionBase>
        );
    }
}

export class AccordionHeader extends Component {
    render() {
        return (
            <AccordionItemHeading className="font-bold">
                <AccordionItemState>
                    {(state) => {
                        return (
                            <AccordionItemButton className="space-x-2">
                                {state.expanded ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-right"></i>}
                                <span>{this.props.children}</span>
                            </AccordionItemButton>
                        )
                    }}
                </AccordionItemState>
            </AccordionItemHeading>
        );
    }
}