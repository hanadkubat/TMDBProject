import React from "react";
import { Button, ButtonGroup } from "reactstrap";

export default function CategoryButtons(props) {

  const selected = (cat) => {
    return cat === props.current ? 'primary' : 'secondary'
  }

  return (
    <div className="row mt-3">
      <div className="col-4">
        <ButtonGroup>
          <Button color={selected('movie')} onClick={() => props.categoryHandler('movie')}>Movies</Button>
          <Button color={selected('tv')} onClick={() => props.categoryHandler('tv')}>TV Shows</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
