import React from 'react';
import { Component } from 'react';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';


class Searchbar extends Component {
    state = {
        query: '',
    };

    handleQueryChange = event => {
        this.setState({ query: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.query.trim() === '') {
            toast.error('Please enter your request!');
            return;
        };;

        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
        console.log(this.state.query)
    }

    render() {
        return (
            <div>
                <header className={s.Searchbar}>
                    <form className={s.SearchForm} onSubmit={this.handleSubmit}>
                        <button type="submit" className={s.SearchForm_button}>
                            <span className={s.SearchForm_button__label}>Search</span>
                        </button>

                        <input
                            className={s.SearchForm_input}
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                            value={this.state.query}
                            onChange={this.handleQueryChange}
                        />
                    </form>
                </header>
            </div>
        );
    }
}

export default Searchbar;

   