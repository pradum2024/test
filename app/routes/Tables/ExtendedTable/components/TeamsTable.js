import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, {
  Comparator,
  dateFilter,
} from "react-bootstrap-table2-filter";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import _ from "lodash";

import moment from "moment";
import { randomArray } from "./../../../../utilities";
import {
  Badge,
  Button,
  CustomInput,
  StarRating,
  ButtonGroup,
} from "./../../../../components";

import { CustomExportCSV } from "./CustomExportButton";
import { CustomSearch } from "./CustomSearch";
import { CustomPaginationPanel } from "./CustomPaginationPanel";
import { CustomSizePerPageButton } from "./CustomSizePerPageButton";
import { CustomPaginationTotal } from "./CustomPaginationTotal";
const INITIAL_PRODUCTS_COUNT = 1;

const ProductQuality = {
  Paid: "payment-received",
  Unpaid: "payment-not-received",
  Failed: "payment-failed",
};

let Dates = {
  date1: '1/2/2019'
}
let products = {
  product1: 'product1'
}

const generateRow = (index) => ({
  id: index,
  name: products.product1,
  status: randomArray([
    ProductQuality.Unpaid,
    ProductQuality.Paid,
    ProductQuality.Failed,
  ]),
  amount: (1000 + Math.random() * 1000).toFixed(2),
  satisfaction: Math.round(Math.random() * 6),
  Date: Dates.date1,
});

export class TeamsTable extends React.Component {
  constructor() {
    super();

    this.state = {
      products: _.times(INITIAL_PRODUCTS_COUNT, generateRow),
      selected: [],
    };

    this.headerCheckboxRef = React.createRef();
  }

  handleSelect(row, isSelected) {
    if (isSelected) {
      this.setState({ selected: [...this.state.selected, row.id] });
    } else {
      this.setState({
        selected: this.state.selected.filter((itemId) => itemId !== row.id),
      });
    }
  }

  handleSelectAll(isSelected, rows) {
    if (isSelected) {
      this.setState({ selected: _.map(rows, "id") });
    } else {
      this.setState({ selected: [] });
    }
  }

  handleAddRow() {
    const currentSize = this.state.products.length;

    this.setState({
      products: [generateRow(currentSize + 1), ...this.state.products],
    });
  }

  handleDeleteRow() {
    this.setState({
      products: _.filter(
        this.state.products,
        (product) => !_.includes(this.state.selected, product.id)
      ),
    });
  }



  createColumnDefinitions() {
    return [

      {
        dataField: "teamId",
        text: "Id",
        headerStyle: { width: '120px' }, 
        style: { width: '120px' }, 
      },
      {
        dataField: "teamType",
        text: "Team Name",
        headerStyle: { width: '150px' }, 
        style: { width: '150px' }, 
      },
      {
        dataField: "",
        text: "",
        headerStyle: { width: '150px' }, 
        style: { width: '150px' }, 
      },
      {
        dataField: "",
        text: "",
        headerStyle: { width: '150px' }, 
        style: { width: '150px' }, 
      },
      
     

    ];
  }

  render() {
    const columnDefs = this.createColumnDefinitions();
    const paginationDef = paginationFactory({
      paginationSize: 5,
      showTotal: true,
      pageListRenderer: (props) => (
        <CustomPaginationPanel
          {...props}
          size="sm"
          className="ml-md-auto mt-2 mt-md-0 "
        />
      ),
      sizePerPageRenderer: (props) => <CustomSizePerPageButton {...props} />,
      paginationTotalRenderer: (from, to, size) => (
        <CustomPaginationTotal {...{ from, to, size }} />
      ),
    });
    const selectRowConfig = {
      mode: "checkbox",
      selected: this.state.selected,
      onSelect: this.handleSelect.bind(this),
      onSelectAll: this.handleSelectAll.bind(this),
      selectionRenderer: ({ mode, checked, disabled }) => (
        <CustomInput id="id" type={mode} checked={checked} disabled={disabled} />
      ),
      selectionHeaderRenderer: ({ mode, checked, indeterminate }) => (
        <CustomInput
          id="id"
          type={mode}
          checked={checked}
          innerRef={(el) => el && (el.indeterminate = indeterminate)}
        />
      ),
    };

    return (
      <ToolkitProvider
        keyField="id"
        data={this.state.products}
        columns={columnDefs}
        search
        exportCSV
      >
        {(props) => (
          <React.Fragment>
            <div className="d-flex justify-content-end align-items-center mb-2">
              <h6 className="my-0"></h6>
              <div className="d-flex ml-auto">
                <CustomSearch className="mr-2" {...props.searchProps} />
                <ButtonGroup>
                  <CustomExportCSV {...props.csvProps}>Export</CustomExportCSV>
                  <Button
                    size="sm"
                    outline
                    onClick={this.handleDeleteRow.bind(this)}
                  >
                    Delete
                  </Button>
                  <Button
                    size="sm"
                    outline
                    onClick={this.handleAddRow.bind(this)}
                  >
                    <i className="fa fa-fw fa-plus"></i>
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            <BootstrapTable

              classes="table-responsive"
              pagination={paginationDef}

              selectRow={selectRowConfig}
              bordered={false}
              responsive
              {...props.baseProps}
            />
          </React.Fragment>
        )}
      </ToolkitProvider>
    );
  }
}
