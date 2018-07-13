import React, { Component } from 'react'
//componentes internos

//components
import {Table,TableRow,TableHeader,TableCell} from 'carbon-react/lib/components/table'

export default class TableExemplo extends Component {
    constructor(props) {
        super(props)
        this.tableHeader = this.tableHeader.bind(this);
        this.pageSize = this.pageSize.bind(this)
        this.buildRows = this.buildRows.bind(this)
    }

    pageSize = () => {
        return '20';
    }
    buildRows = () => {
        const rows = [];
        rows.push(
            <TableRow
              key={ 1 }
              uniqueID="1">
              <TableCell>
               Coluna 1
              </TableCell>
              <TableCell>
              Coluna 2
              </TableCell>
              <TableCell>
              Coluna 3
              </TableCell>
              <TableCell>
              Coluna 4
              </TableCell>
            </TableRow>
          );
        return rows;
    };
    loadingRow = () => {
        const loadingRow = 'nome-classe-custom';
        return (
          <TableRow
            key={ loadingRow }
            className={ loadingRow }
            uniqueID={ loadingRow }
          >
            <TableCell colSpan={ COL_SPAN }>
              <Spinner />
            </TableCell>
          </TableRow>
        );
      };

    tableHeader = () => {
        // create rows array with header row:
        return (
          <TableRow key='header' as='header'>
            <TableHeader
              name='created_datetime'
              scope='col'
            >
             Exemplo table
            </TableHeader>
    
            <TableHeader
              name='updated_datetime'
              scope='col'
            >
               Coluna 2
            </TableHeader>
    
            <TableHeader
              name='debtor_name'
              scope='col'
            >
            Coluna 3
            </TableHeader>
            <TableHeader
              name='debtor_name'
              scope='col'
            >
            Coluna 4
            </TableHeader>
          </TableRow>
        );
      };
    render() {
        return(
            <Table
                    className="foo"
                    paginate={ true }
                    currentPage='1'
                    pageSize={ this.pageSize() }
                    totalRecords='100'
                    thead={ this.tableHeader() }
                >
                 { this.buildRows() }
            </Table>
        )
    }
}