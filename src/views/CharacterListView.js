import React from 'react'
import { connect } from 'react-redux'

import { CharacterList } from '../components'
// import actions
import { fetchCharacters } from '../actions'
import Loader from 'react-loader-spinner'
import './CharacterListView.css'
class CharacterListView extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    // call our action
    this.props.fetchCharacters()
  }

  render () {
    console.log('CHARACTERSLISTVIEW', this.props.characters[0])
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <Loader type='Ball-Triangle' color='#00BFFF' height='90' width='60' />
    }
    return (
      <div className='CharactersList_wrapper'>
        <CharacterList characters={this.props.characters[0]} />
      </div>
    )
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = (state) => {
  console.log(state)
  return {
    characters: state.charsReducer.characters,
    error: state.error,
    isFetching: state.isFetching
  }
}
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    /* action creators go here */
    fetchCharacters
  }
)(CharacterListView)
