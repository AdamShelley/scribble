import React, { useState } from "react";
import styled from "styled-components";
import EmptyNote from "./EmptyNote";
import Note from "./Note";
import { createScribble } from "../utils/db";
import { useAuth } from "../utils/auth";
import Button from "../styles/Button";

const StyledScribbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledSearchBar = styled.div`
  background-color: var(--dark-grey);
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    padding: 0 1rem;
  }

  h3 {
    font-weight: 300;
    font-size: 1rem;
    letter-spacing: 1px;
  }
`;

const StyledNoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* min-height: 100%;
  min-width: 100%; */
  flex-grow: 100;
  cursor: auto;
  position: relative;
`;

const NoteContainer = ({ selectedScribble }) => {
  const saveClicked = () => {};

  return (
    <StyledScribbleContainer>
      <StyledSearchBar>
        <h3>Search</h3>
        <div>
          <Button onClick={saveClicked}>Save</Button>
          <Button>Delete</Button>
        </div>
      </StyledSearchBar>
      <StyledNoteContainer>
        <div>
          {!selectedScribble ? (
            <EmptyNote />
          ) : (
            <Note selectedScribble={selectedScribble} />
          )}
        </div>
      </StyledNoteContainer>
    </StyledScribbleContainer>
  );
};

export default NoteContainer;
