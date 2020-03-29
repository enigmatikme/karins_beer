import React, { useEffect, useState } from 'react';
import { Header, Segment, Divider, Grid } from 'semantic-ui-react';
import ReactMarkDown from 'react-markdown';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import assignmentPath from '../content/assignment.md';
import apiPath from '../content/api.md';

const Home = ({ dispatch }) => {
  const [state, setState] = useState({
    assignment: null,
    api: null,
    loaded: false
  });

  const fetchContent = async () => {
    try {
      const assignmentRes = await fetch(assignmentPath);
      const assignment = await assignmentRes.text();
      const apiRes = await fetch(apiPath);
      const api = await apiRes.text();
      setState({
        ...state,
        loaded: true,
        assignment,
        api,
      })
    } catch (error) {
      dispatch(setFlash('Unable to fetch instructions. Please try again', 'error'))
    }
  }

  useEffect(() => {
    fetchContent();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Segment basic>
      <Segment basic textAlign='center'>
        <Header as='h1'>Karin's Beer - React Assessment</Header>
      </Segment>
      <Grid>
        <Grid.Column computer={8} tablet={8} mobile={16}>
          <Segment>
            <Header as='h1' textAlign='center'>
                Assessment Details:
            </Header>
            <Divider />
            <ReactMarkDown source={state.assignment} />
          </Segment>
        </Grid.Column>
        <Grid.Column computer={8} tablet={8} mobile={16}>
          <Segment>
              <Header as='h1' textAlign='center'>
                  Api Endpoints:
              </Header>
              <Divider />
              <ReactMarkDown source={state.api} />
            </Segment>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};


export default connect()(Home);