import React from "react";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";

export default function SearchBar(props) {
  let typingTimer;

  const typingStop = () => {
    clearTimeout(typingTimer);
  };

  const typingStart = event => {
    const query = event.target.value;
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      props.doneTyping(query);
    }, 2000);
  };

  return (
    <div className="row my-3">
      <div className="col">
        <InputGroup size="lg">
          <InputGroupAddon addonType="prepend" className="d-none d-lg-block">
            Search
          </InputGroupAddon>
          <Input onKeyDown={typingStop} onKeyUp={typingStart} defaultValue={props.value} placeholder={'Type to search...'} />
        </InputGroup>
      </div>
    </div>
  );
}
