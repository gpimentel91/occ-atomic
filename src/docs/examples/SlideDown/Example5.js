/* SlideDown with expand's event handler by props */
import React from 'react';
import { SlideDown, Checkbox, Button } from '@occmundial/occ-atomic';



export default class Example5 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        const { show } = this.state;
        this.setState({
            show: !show
        });
    }

    onToggle(value) {
        console.log(`Expanded: ${value}`);
    }

    render() {
        const { show } = this.state;
        return (
            <div>
                <SlideDown title="SlideDown" expanded={show} onToggle={this.onToggle}>
                    <Checkbox label="Content of the SlideDown" />
                </SlideDown>
                <br/>
                <Button sm onClick={this.toggle}>{show ? 'Collapse' : 'Expand'}</Button>
            </div>
        );
    }
}
