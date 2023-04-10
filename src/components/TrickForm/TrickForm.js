import React, { Component } from 'react'

class TrickForm extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            stance: "",
            obstacle: "",
            name: ""
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        const newTrick = {
            id: Date.now(),
            stance: this.state.stance,
            obstacle: this.state.obstacle
        }
        this.props.addTrick(newTrick)
    }

    render(){
        return (
            <form>
                <select
                name='stance'
                value={this.state.stance}
                onChange={event => this.handleChange(event)}
                >
                    <option value=''>Select a Stance</option>
                    <option value='regular'>Regular</option>
                    <option value='switch'>Switch</option>
                </select>

                <select
                name='obstacle'
                value={this.state.obstacle}
                onChange={event => this.handleChange(event)}
                >
                    <option value=''>Select an Obstacle</option>
                    <option value='flatground'>Flatground</option>
                    <option value='ledge'>Ledge</option>
                    <option value='rail'>Rail</option>
                    <option value='stairs'>Stairs</option>
                    <option value='pool'>Pool</option>
                </select>
                <button onClick={event => this.handleSubmit(event)}>Submit</button>
            </form>
        )
    }
}

export default TrickForm