import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    // The state is just a list of key/value pairs (like a hashmap)
    this.state = {
      search: "",
      selectedType: "all", // Added state for selected type
    };
  }

  // Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  // Sets the state whenever a type is selected from the dropdown
  onSelectType = (type) => {
    this.setState({ selectedType: type });
  }

  // Updated filterItem to consider both search and type filters
  filterItem = (item) => {
    const matchesSearch = item.name.toLowerCase().search(this.state.search) !== -1;
    const matchesType = this.state.selectedType === "all" || item.type === this.state.selectedType;

    return matchesSearch && matchesType;
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>

        <DropdownButton id="typeDropdown" title={`Type (${this.state.selectedType})`} onSelect={this.onSelectType}>
          <Dropdown.Item eventKey="all">All</Dropdown.Item>
          <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
          <Dropdown.Item eventKey="Vegetable">Vegetable</Dropdown.Item>
        </DropdownButton>

        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
