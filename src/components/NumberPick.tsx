import * as React from 'react';

interface NumberPickProps {
    type: 'decremento' | 'incremento'
}

export class NumberPick extends React.Component <{}, {}> {

    render() {
        const label = this.props.type
        return <button>{this.props.type === "decremento" ? "-" : "+"}</button>
    }
}