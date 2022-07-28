import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container, IconButton, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import { useNavigate } from "react-router-dom";
import { cartContext } from "../../contexts/cardContext";
import Loader from "../Loader/Loader";
import "../Card/Card.css";
// import Loader from "../Loader/Loader";

export default function Cart() {
  const navigate = useNavigate();
  const { getCart, cart, deleteFromCart, changeCount } =
    React.useContext(cartContext);
  React.useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  return cart ? (
    // <div className="container">
    <div className="buscet-block">
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          className="table-buscet">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Count</TableCell>
              <TableCell align="right">Subprice</TableCell>
              <TableCell align="right">Info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.products.map(row => (
              <TableRow
                className="cart-table-row"
                key={row.item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.item.title}
                </TableCell>
                <TableCell align="right">{row.item.price}$</TableCell>

                <TableCell align="right">
                  <IconButton
                    onClick={() => changeCount(row.count - 1, row.item.id)}>
                    <RemoveIcon />
                  </IconButton>
                  {row.count}
                  <IconButton
                    onClick={() => changeCount(row.count + 1, row.item.id)}>
                    <AddIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="right">{row.subPrice}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => deleteFromCart(row.item.id)}>
                    <DeleteIcon />
                  </IconButton>

                  <IconButton
                    onClick={() => navigate(`/details/${row.item.id}`)}>
                    <InfoIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box>
        <Typography className="total-price" variant="h4">
          Total price: {cart.totalPrice} kgs
        </Typography>
        <button
          onClick={() => navigate("/credit-card")}
          className="btn-admin btn-by">
          by now
        </button>
      </Box>
    </div>
  ) : (
    // </div>
    <Loader />
  );
}
