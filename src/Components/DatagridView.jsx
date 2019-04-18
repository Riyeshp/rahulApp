import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import DataJson from "./Data";
import Modal from "./Modal";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles";

class DatagridView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      WorkItems: []
    };
    this.createItem = this.createItem.bind(this);
  }

  getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTable: {
          root: {},
          paper: {
            boxShadow: "none"
          }
        },
        MUIDataTableBodyRow: {
          root: {
            "&:nth-child(odd)": {
              backgroundColor: "#cbe6ff"
            }
          }
        },
        MUIDataTableBodyCell: {},
        MUIDataTableHeadCell: {
          root: {
            "&:nth-child(2)": {
              width: 70
            }
          }
        }
      }
    });

  componentDidMount() {
    var list = DataJson.map(this.createItem);
    this.setState({ WorkItems: list });
  }

  createItem(item) {
    return {
      alertID: <Modal entries={item} />,
      alertEntity: item.alertEntity,
      alertEntityKey: item.alertEntityKey,
      alertBussinessDate: item.alertBussinessDate,
      alertcreatedDate: item.alertcreatedDate,
      alertScore: item.alertScore,
      alertScoreNormalised: item.alertScoreNormalised,
      bussinessUnitIdentifier: item.bussinessUnitIdentifier,
      ownerIdentifier: item.ownerIdentifier,
      currentState: item.currentState
    };
  }

  render() {
    const columns = [
      {
        name: "alertID",
        label: "Alert ID",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "alertEntity",
        label: "Alert Entity",
        options: {
          filter: true,
          sort: false
        }
      },
      {
        name: "alertEntityKey",
        label: "Alert Entity Key",
        options: {
          filter: true,
          sort: false
        }
      },
      {
        name: "alertBussinessDate",
        label: "Alert Bussiness Date",
        options: {
          filter: true,
          sort: false
        }
      },
      {
        name: "alertcreatedDate",
        label: "Alert Created Date",
        options: {
          filter: true,
          sort: false
        }
      },
      {
        name: "alertScore",
        label: "Alert Score",
        options: {
          filter: true,
          sort: true
        }
      },
      {
        name: "alertScoreNormalised",
        label: "Alert Score Normalised",
        options: {
          filter: true,
          sort: false
        }
      },
      {
        name: "bussinessUnitIdentifier",
        label: "Bussiness Unit Identifier",
        options: {
          filter: true,
          sort: false
        }
      },
      {
        name: "ownerIdentifier",
        label: "Owner Identifier",
        options: {
          filter: true,
          sort: false
        }
      },
      {
        name: "alertScoreNormalised",
        label: "Alert Score Normalised",
        options: {
          filter: true,
          sort: false
        }
      },
      {
        name: "currentState",
        label: "Current State",
        options: {
          filter: true,
          sort: false
        }
      }
    ];

    // console.log(this.state.list);

    const options = {
      filter: true,
      filterType: "dropdown",
      responsive: "stacked"
    };

    // console.log(this.state.WorkItems);
    return (
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable
          title={"WorkItems"}
          data={this.state.WorkItems}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    );
  }
}

export default DatagridView;
