import React, { lazy } from 'react'
import { connect } from 'react-redux'
import { Card, Image, Icon, Divider, Container } from 'semantic-ui-react'
import { push } from 'connected-react-router'
import './searchresults.scss'

const SearchResults = ({ profiles, push }) => {
  const bioReduced = bio => {
    if (bio.length > 10) {
      return bio.substring(0, 20) + '...'
    }
    return bio
  }

  const computeName = (f, l) => `${f} ${l}`
  const onClick = id => push(`/profile/${id}`)
  return (
    <>
      {profiles ? (
        <div className='cards'>
          {profiles.map((value, index) => (
            <article className='my-card' key={index}>
              <div
                className='my-card__thumb'
                style={{ backgroundColor: value.gender ? 'blue' : 'pink' }}
              >
                <Image
                  src={value.photo}
                  style={{ height: '100%', width: '100%' }}
                />
              </div>
              <div className='my-card__body'>
                <div
                  className='my-card__title'
                  style={{
                    color: 'white',
                    textShadow:
                      '2px 0 0 #000000, -2px 0 0 #000000, 0 2px 0 #000000, 0 -2px 0 #000000, 1px 1px #000000, -1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000'
                  }}
                >
                  {computeName(value.firstname, value.lastname)}
                </div>
                <div className='my-card__infos'>
                  <div className='my-card__mails'>
                    <span ng-if='!categ.emails || categ.emails.length === 0'>
                      Pas d'email associes
                    </span>
                    <span ng-if='categ.emails.length'>Emails associés : </span>
                  </div>
                  <div className='my-card__actions'>
                    <button className='btn btn-sm btn-success waves-effect'>
                      <i className='fa fa-edit' /> Modifier
                    </button>
                    <button className='btn btn-sm btn-danger waves-effect'>
                      <i className='fa fa-window-close' /> Effacer
                    </button>
                  </div>
                </div>
              </div>
            </article>
            // <Card
            //   key={index}
            //   link
            //   onClick={() => onClick(value.id)}
            //   centered
            //   raised
            //   color={value.gender ? 'blue' : 'pink'}
            //   image={value.photo}
            //   header={computeName(value.firstname, value.lastname)}
            //   meta={value.pseudo}
            //   description={bioReduced(value.bio)}
            //   extra={
            //     <>
            //       <Icon name={value.gender ? 'mars' : 'venus'} />
            //       {value.gender ? 'Homme' : 'Femme'}
            //       <Divider />
            //       <Icon name='search' />
            //       {value.orientation.charAt(0).toUpperCase() +
            //                 value.orientation.slice(1)}
            //     </>
            //   }
            // />
          ))}
        </div>
      ) : (
        <>without profiles</>
      )}
    </>
  )
}

const mapStateToProps = ({ profiles }) => ({
  profiles
})

export default connect(
  mapStateToProps,
  { push }
)(SearchResults)
