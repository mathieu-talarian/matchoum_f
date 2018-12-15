import { Alert, Spin, Switch } from 'antd'
import React, { useState, useEffect } from 'react'

const ConfirmationPage = ({ p }) => {
  const [loading, setLoading] = useState(true)
  const [success, setState] = useState(false)

  const container = (
    <Alert
      message='Alert message title'
      description='Further details about the context of this alert.'
      type='info'
    />
  )

  const toggle = () => {
    setLoading(false)
  }

  useEffect(() => {
    console.log('mount it')
    // do something
  })

  // componentDidMount() {
  //   // sagas actions
  //   // this.props
  //   //   .confirm(this.props.match.params.token)
  //   //   .then(() => this.setState({ loading: false, success: true }))
  //   //   .catch(() => this.setState({ loading: false, success: false }));
  // }
  return (
    <div>
      <Spin spinning={loading} delay={500}>
        {this.container}
      </Spin>
      <div style={{ marginTop: 16 }}>
        Loading state：
        <Switch checked={loading} onChange={this.toggle} />
      </div>
    </div>
  )
}

export default ConfirmationPage
