import React from 'react';

import './ModalStyle.scss';

export default class EditModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.item.text
        };
    }

    render() {
        return <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Edit item</p>
                    <button className="delete" onClick={() => this.props.close()}></button>
                </header>
                <section className="modal-card-body">
                    <input type="text" value={this.state.value} className="input" onChange={e => this.handleChange(e)} />
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success" onClick={() => this.props.save(this.state.value)}>Save</button>
                    <button className="button is-danger" onClick={() => this.props.close()}>Cancel</button>
                </footer>
            </div>
        </div>;
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
}