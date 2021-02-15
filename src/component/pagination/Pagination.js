import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Pagination} from '@material-ui/lab/';
import ProductList from '../productList/ProductList';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
   selected: {
        backgroundColor: 'transparent',
        color:'#19D5C6',
    },
}));

const PaginationOutlined = (props)=> {
  const classes = useStyles();
  const itemsPerPage = 3;
  const [page, setPage] = React.useState(1);
  const [noOfPages] = React.useState(
    Math.ceil(props.allProList.length / itemsPerPage)
  );

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className={classes.root}>
    <ProductList allProList={props.allProList}
      page={page}
      itemsPerPage={itemsPerPage}/>

      <Pagination
          count={noOfPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          classes={{ ul: classes.paginator }}
        />
    </div>
  );
}


export default PaginationOutlined;